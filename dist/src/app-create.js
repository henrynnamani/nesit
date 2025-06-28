"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const aws_sdk_1 = require("aws-sdk");
function createApp(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setVersion('1.0')
        .setTitle('Nesit Blog app')
        .setDescription('Please use API URL as http://localhost:3000')
        .setTermsOfService('http://localhost:3000/terms-of-service')
        .setLicense('Azure License', 'http://localhost:3000/azure-licence')
        .addServer('http://localhost:3000')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    const configService = app.get(config_1.ConfigService);
    aws_sdk_1.config.update({
        credentials: {
            accessKeyId: configService.get('appConfig.awsAccessKeyId'),
            secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
        },
        region: configService.get('appConfig.awsRegion'),
    });
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
}
//# sourceMappingURL=app-create.js.map