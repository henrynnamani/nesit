"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveUser = void 0;
const common_1 = require("@nestjs/common");
const auth_constant_1 = require("../constant/auth.constant");
exports.ActiveUser = (0, common_1.createParamDecorator)((field, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request[auth_constant_1.REQUEST_USER_KEY];
    return field ? user[field] : user;
});
//# sourceMappingURL=active-user.decorator.js.map