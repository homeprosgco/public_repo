import boto3

from core.util.file_util.sg_file_util_abstract_class import *

class SGS3FileUtils(FileUtilsInterface):
    def __init__(
        self, 
        bucket_name: str = "react-component-generator-bucket", 
        s3_prefix: str = "emotion_components_template_library", 
        region_name: str = "us-east-1"
    ):
        self.s3 = boto3.client("s3", region_name=region_name)
        self.bucket_name = bucket_name
        self.prefix = s3_prefix.strip("/")

    def file_path(self, relative_path: str) -> str:
        return f"{self.prefix}/{relative_path}".strip("/")

    def read_file(self, relative_path: str, mode="r", encoding="utf-8") -> Optional[str]:
        key = self.file_path(relative_path)
        
        try:
            obj = self.s3.get_object(Bucket=self.bucket_name, Key=key)
            body = obj["Body"].read()
            return body.decode(encoding) if "b" not in mode else body
        except ClientError as e:
            print(f"❌ S3 read error for {key}: {e}")
            return None

    def read_file_as_json(self, relative_path: str) -> Any:
        content = self.read_file(relative_path)
        return json.loads(content) if content else None

    def write_file(self, absolute_path: str, mode="w", encoding="utf-8"):
        if "r" in mode:
            raise ValueError("S3 write_file does not support read mode.")

        key = self.file_path(absolute_path)
        self.s3.put_object(Bucket=self.bucket_name, Key=key, Body=b"" if "b" in mode else "")
        print(f"✅ Created empty S3 object: {key}")

    def mkdir(self, relative_dir: str):
        key = self.file_path(f"{relative_dir}/")
        self.s3.put_object(Bucket=self.bucket_name, Key=key)
        print(f"📁 Created S3 directory: {key}")

    def write_text_file(self, relative_path: str, content: str, encoding: str = "utf-8"):
        key = self.file_path(relative_path)
        self.s3.put_object(Bucket=self.bucket_name, Key=key, Body=content.encode(encoding))
        print(f"✅ Wrote S3 object: s3://{self.bucket_name}/{key}")


    def write_binary_file(self, relative_path: str, content: bytes):
        key = self.file_path(relative_path)
        self.s3.put_object(Bucket=self.bucket_name, Key=key, Body=content)
        print(f"✅ Wrote binary file to S3: s3://{self.bucket_name}/{key}")


    def dir_path(self, relative_dir: str) -> str:
        return self.file_path(relative_dir)

    def list_dir_files(self, relative_dir: str, ext: str):
        prefix = self.file_path(relative_dir)
        paginator = self.s3.get_paginator("list_objects_v2")
        for page in paginator.paginate(Bucket=self.bucket_name, Prefix=prefix):
            for obj in page.get("Contents", []):
                if obj["Key"].endswith(f".{ext}"):
                    yield obj["Key"]

    def save_html_to_file(self, html_str: str, filename: str = "generated_output.html") -> str:
        key = self.file_path(filename)
        self.s3.put_object(Bucket=self.bucket_name, Key=key, Body=html_str.encode("utf-8"))
        return key

    def list_files_recursively(self, path: str, indent=0):
        for key in self.list_dir_files(path, ""):
            print("  " * indent + f"📄 {key}")

    def render_template_from_file(self, template_name: str, context: dict) -> str:
        raise NotImplementedError("Jinja template rendering is not supported in S3 mode.")

    def write_barrel_files_recursive(self, base_dir: Path, export_suffix: str = "", root: bool = True):
        raise NotImplementedError("Barrel file writing is not supported in S3 mode.")

    def find_file_by_name(self, search_dir: str, file_name: str) -> Optional[str]:
        for key in self.list_dir_files(search_dir, file_name.split(".")[-1]):
            if key.endswith(file_name):
                return key
        return None

    def iter_files_with_extension(self, search_dir: str, ext: str) -> Generator[str, None, None]:
        yield from self.list_dir_files(search_dir, ext)

    def iter_file_contents_with_extension(self, search_dir: str, ext: str, encoding: str = "utf-8") -> Generator[tuple[str, str], None, None]:
        for key in self.iter_files_with_extension(search_dir, ext):
            content = self.read_file(key, encoding=encoding)
            if content:
                yield key, content

    def archive_dir(self) -> str:
        return f"{self.prefix}/core/feed_files/archive".strip("/")

    def template_archive_dir(self, template_name: str) -> str:
        return f"{self.archive_dir()}/{template_name}".strip("/")

    def template_pages_dir(self, template_name: str) -> str:
        return f"{self.template_archive_dir(template_name)}/pages".strip("/")

    def generated_components_dir(self) -> str:
        return f"{self.prefix}/lib/generated_components".strip("/")

    def generated_template_dir(self, template_name: str) -> str:
        return f"{self.prefix}/lib/templates/{template_name}".strip("/")

    def tw_color_util_dir(self) -> str:
        return f"{self.prefix}/core/util/tailwind_color_util".strip("/")

    def template_styles_dir(self, template_name: str) -> str:
        return f"{self.template_archive_dir(template_name)}/styles".strip("/")
