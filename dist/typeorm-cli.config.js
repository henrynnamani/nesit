"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _1751139307305_firstMigration_1 = require("./src/migrations/1751139307305-firstMigration");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5438,
    username: 'graey',
    password: 'pyr@hornet0101',
    database: 'nestblog',
    entities: ['**/*.entity.js'],
    migrations: [_1751139307305_firstMigration_1.FirstMigration1751139307305],
});
//# sourceMappingURL=typeorm-cli.config.js.map