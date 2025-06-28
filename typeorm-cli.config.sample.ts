import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: '',
  port: 5438,
  username: '',
  password: '',
  database: '',
  entities: ['**/*.entity.js'],
  migrations: ['migrations/*.js'],
});
