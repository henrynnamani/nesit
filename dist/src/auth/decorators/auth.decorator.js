"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const auth_constant_1 = require("../constant/auth.constant");
const Auth = (...authTypes) => (0, common_1.SetMetadata)(auth_constant_1.AUTH_TYPE_KEY, authTypes);
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map