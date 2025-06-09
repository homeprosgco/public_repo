import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: process.env['REGION'] });
const bucketName = process.env['BUCKET_NAME']!;
const cloudFrontDomain = process.env['CLOUDFRONT_URL']!; // 🔹 Set in Lambda env variables

interface UploadEvent {
  arguments: {
    fileName: string;
    fileType: string;
    filePath: string;
  };
}

interface UploadResponse {
  fileUrl: string; // 🔹 CloudFront URL
  s3Key: string;
}

export async function handler(event: UploadEvent): Promise<UploadResponse> {
  console.log('📥 Request:', JSON.stringify(event, null, 2));

  const { fileName, fileType, filePath } = event.arguments;
  const fileKey = `${filePath}/${Date.now()}-${fileName}`;

  try {
    // Upload file metadata (actual file will be uploaded by the frontend)
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: fileType,
      ACL: 'public-read', // 🔹 Allows CloudFront to serve it
    });

    await s3.send(command);

    return {
      fileUrl: `https://${cloudFrontDomain}/${fileKey}`, // ✅ CloudFront URL
      s3Key: fileKey,
    };
  } catch (error) {
    console.error('❌ Failed to upload file metadata:', error);
    throw new Error('Failed to process file upload');
  }
}
