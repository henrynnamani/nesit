"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./provider/users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const get_user_dto_1 = require("./dto/get-user.dto");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const create_many_user_dto_1 = require("./dto/create-many-user.dto");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enum/auth-type.enum");
let UsersController = class UsersController {
    usersService;
    configService;
    constructor(usersService, configService) {
        this.usersService = usersService;
        this.configService = configService;
    }
    getUsers(getUserParamDto, limit, page) {
        return this.usersService.findAll(getUserParamDto, limit, page);
    }
    async createManyUser(createUsersDto) {
        return this.usersService.createMany(createUsersDto);
    }
    async createUser(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('{/:id}'),
    (0, swagger_1.ApiOperation)({
        summary: 'Fetch list of registered users',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'Number of entries returned per query',
        example: 10,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        type: 'number',
        required: false,
        description: 'The position of the page number',
        example: 2,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User fetched successfully',
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_dto_1.GetUserParamDto, Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('create-many'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_many_user_dto_1.CreateManyUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createManyUser", null);
__decorate([
    (0, common_1.Post)(''),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService])
], UsersController);
//# sourceMappingURL=users.controller.js.map