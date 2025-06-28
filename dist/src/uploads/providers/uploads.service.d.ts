import { Repository } from 'typeorm';
import { Upload } from '../upload.entity';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
export declare class UploadsService {
    private readonly uploadRepository;
    private readonly uploadToAwsProvider;
    private readonly configService;
    constructor(uploadRepository: Repository<Upload>, uploadToAwsProvider: UploadToAwsProvider, configService: ConfigService);
    uploadFile(file: Express.Multer.File): Promise<Upload>;
}
