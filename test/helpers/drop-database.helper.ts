import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export async function dropDatabase(config: ConfigService) {
  const dataSource = new DataSource({
    type: 'postgres',
    host: config.get('database.host'),
    port: config.get('database.port'),
    username: config.get('database.user'),
    password: config.get('database.password'),
    database: config.get('database.name'),
    synchronize: config.get('database.synchronize'),
  });

  await dataSource.initialize();

  await dataSource.dropDatabase();

  await dataSource.destroy();
}
