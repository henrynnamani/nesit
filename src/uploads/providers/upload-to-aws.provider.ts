import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { Express } from 'express';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadToAwsProvider {
  constructor(private readonly configService: ConfigService) {}

  public async uploadFile(file: Express.Multer.File) {
    const s3 = new S3();

    try {
      const uploadResult = await s3
        .upload({
          Bucket: this.configService.get('appConfig.awsBucketName')!,
          Key: this.generateFileName(file),
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();

      return uploadResult.Key;
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  private generateFileName(file: Express.Multer.File) {
    const name = file.originalname.split('.')[0];

    name.replace(/\s/g, '').trim();

    const extension = path.extname(file.originalname);

    let timestamp = new Date().getTime().toString().trim();

    return `${name}-${timestamp}-${uuidv4()}${extension}`;
  }
}
