"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurntSource = exports.UserSource = void 0;
require("reflect-metadata");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
(0, dotenv_1.config)();
exports.UserSource = new typeorm_1.DataSource({
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
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
});
exports.RestaurntSource = new typeorm_1.DataSource({
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
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
});
