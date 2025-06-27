import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { ConfigService } from '@nestjs/config';
import { dropDatabase } from 'test/helpers/drop-database.helper';
import { bootstrapNestApplication } from 'test/helpers/bootstrap-nest';
import {
  completeUser,
  missingEmail,
  missingFirstName,
  missingPassowrd,
} from './users.post.e2e-spec.sample';

describe('[Users] @Post Endpoints', () => {
  let app: INestApplication<App>;
  let config: ConfigService;
  let httpServer: App;

  beforeAll(async () => {
    app = await bootstrapNestApplication();
    config = app.get<ConfigService>(ConfigService);
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await dropDatabase(config);
    await app.close();
  });

  it('/users - Endpoint is public', async () => {
    return request(httpServer).post('/users').send({}).expect(400);
  });

  it('/users - firstName is mandatory', async () => {
    return request(httpServer)
      .post('/users')
      .send(missingFirstName)
      .expect(400);
  });

  it('/users - Email is mandatory', async () => {
    return request(httpServer).post('/users').send(missingEmail).expect(400);
  });

  it('/users - Password is mandatory', async () => {
    return request(httpServer).post('/users').send(missingPassowrd).expect(400);
  });

  it('/users - Valid request successfully create user', async () => {
    return request(httpServer)
      .post('/users')
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data).toBeDefined();
        expect(body.data.firstName).toEqual(completeUser.firstName);
        expect(body.data.lastName).toEqual(completeUser.lastName);
        expect(body.data.email).toEqual(completeUser.email);
      });
  });

  it('/users - Password is not returned', async () => {
    return request(httpServer)
      .post('/users')
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data.password).toBeUndefined();
      });
  });

  it('/users - Google ID is not returned', async () => {
    return request(httpServer)
      .post('/users')
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data.googleId).toBeUndefined();
      });
  });
});
