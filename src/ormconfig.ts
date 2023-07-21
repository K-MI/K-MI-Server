import 'reflect-metadata';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

export const UserSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_USER,
  synchronize: true,
  logging: false,
  entities: ['dist/user/*.js'],
  migrations: [],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy(),
});

export const RestaurntSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_RESTAURANT,
  synchronize: true,
  logging: false,
  entities: ['dist/restaurant/*.js'],
  migrations: [],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy(),
});
