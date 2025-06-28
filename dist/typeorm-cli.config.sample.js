"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: '',
    port: 5438,
    username: '',
    password: '',
    database: '',
    entities: ['**/*.entity.js'],
    migrations: ['migrations/*.js'],
});
//# sourceMappingURL=typeorm-cli.config.sample.js.map