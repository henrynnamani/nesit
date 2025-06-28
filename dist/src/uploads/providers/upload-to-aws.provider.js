"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadToAwsProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aws_sdk_1 = require("aws-sdk");
const path = require("path");
const uuid_1 = require("uuid");
let UploadToAwsProvider = class UploadToAwsProvider {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async uploadFile(file) {
        const s3 = new aws_sdk_1.S3();
        try {
            const uploadResult = await s3
                .upload({
                Bucket: this.configService.get('appConfig.awsBucketName'),
                Key: this.generateFileName(file),
                Body: file.buffer,
                ContentType: file.mimetype,
            })
                .promise();
            return uploadResult.Key;
        }
        catch (err) {
            throw new common_1.RequestTimeoutException(err);
        }
    }
    generateFileName(file) {
        const name = file.originalname.split('.')[0];
        name.replace(/\s/g, '').trim();
        const extension = path.extname(file.originalname);
        let timestamp = new Date().getTime().toString().trim();
        return `${name}-${timestamp}-${(0, uuid_1.v4)()}${extension}`;
    }
};
exports.UploadToAwsProvider = UploadToAwsProvider;
exports.UploadToAwsProvider = UploadToAwsProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UploadToAwsProvider);
//# sourceMappingURL=upload-to-aws.provider.js.map