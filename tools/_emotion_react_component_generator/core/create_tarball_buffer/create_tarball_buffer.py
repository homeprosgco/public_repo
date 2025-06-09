import os
import tarfile
import io

def create_tarball_buffer(source_dir: str) -> io.BytesIO:
    """
    Creates a .tar.gz archive of the source_dir and returns it as an in-memory buffer.
    """
    tar_buffer = io.BytesIO()

    with tarfile.open(fileobj=tar_buffer, mode='w:gz') as tar:
        for root, _, files in os.walk(source_dir):
            for file in files:
                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, start=source_dir)
                tar.add(full_path, arcname=relative_path)

    tar_buffer.seek(0)
    return tar_buffer

# import boto3

# s3 = boto3.client('s3')
# template_id = 'template-123'
# s3_key = f'templates/{template_id}.tar.gz'
# bucket_name = 'your-template-bucket'

# buffer = create_tarball_buffer('/tmp/generated-template')

# s3.put_object(
#     Bucket=bucket_name,
#     Key=s3_key,
#     Body=buffer,
#     ContentType='application/gzip'
# )

