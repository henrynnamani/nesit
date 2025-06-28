"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC === 'true' ? true : false,
    autoLoadEntities: process.env.DB_AUTOLOAD === 'true' ? true : false,
}));
//# sourceMappingURL=db.config.js.map