"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5438,
    username: 'graey',
    password: 'pyr@hornet0101',
    database: 'nestblog',
    entities: ['**/*.entity.js'],
    migrations: ['migrations/*.js'],
});
//# sourceMappingURL=typeorm-cli.config.js.map