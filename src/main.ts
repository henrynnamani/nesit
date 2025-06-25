import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('Nesit Blog app')
    .setDescription('Please use API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense('Azure License', 'http://localhost:3000/azure-licence')
    .addServer('http://localhost:3000')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  const configService = app.get(ConfigService);

  config.update({
    credentials: {
      accessKeyId: configService.get<string>('appConfig.awsAccessKeyId')!,
      secretAccessKey: configService.get<string>(
        'appConfig.awsSecretAccessKey',
      )!,
    },
    region: configService.get<string>('appConfig.awsRegion')!,
  });

  SwaggerModule.setup('api', app, document);

  app.enableCors();
  // app.useGlobalInterceptors(new DataResponseInterceptor())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
