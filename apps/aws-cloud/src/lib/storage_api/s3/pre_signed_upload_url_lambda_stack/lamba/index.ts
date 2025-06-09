import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({ region: process.env['REGION'] });
const bucketName = process.env['BUCKET_NAME']!;

interface UploadEvent {
  arguments: {
    fileName: string;
    fileType: string;
    filePath: string;
  };
}

interface UploadResponse {
  signedUrl: string;
  fileKey: string;
}

export async function handler(event: UploadEvent): Promise<UploadResponse> {
  console.log('📥 Request:', JSON.stringify(event, null, 2));

  const { fileName, fileType, filePath } = event.arguments;
  const fileKey = `${filePath}/${Date.now()}-${fileName}`;

  try {
    // ✅ Upload file metadata (actual file will be uploaded by the frontend)
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: fileType,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

    return {
      signedUrl,
      fileKey,
    };
  } catch (error) {
    console.error('❌ Failed to generate pre-signed URL:', error);
    throw new Error('Failed to generate upload URL');
  }
}
