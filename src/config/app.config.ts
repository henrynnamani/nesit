import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  environment: process.env.NODE_ENV || 'production',
  apiVersion: process.env.API_VERSION,
  awsBucketName: process.env.AWS_PUBLIC_BUCKET_NAME,
  awsRegion: process.env.AWS_REGION,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsCloudfrontUrl: process.env.AWS_CLOUDFRONT_URL,
  mailHost: process.env.MAIL_HOST,
  smtpUserName: process.env.SMTP_USERNAME,
  smtpPassword: process.env.SMTP_PASSWORD,
}));
