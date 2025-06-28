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
exports.CreateUserProvider = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const hashing_provider_1 = require("../../auth/provider/hashing.provider");
const mail_service_1 = require("../../mail/providers/mail.service");
let CreateUserProvider = class CreateUserProvider {
    userRepository;
    hashingProvider;
    mailService;
    constructor(userRepository, hashingProvider, mailService) {
        this.userRepository = userRepository;
        this.hashingProvider = hashingProvider;
        this.mailService = mailService;
    }
    async createUser(createUserDto) {
        let existingUser;
        try {
            existingUser = await this.userRepository.findOne({
                where: { email: createUserDto.email },
            });
        }
        catch (err) {
            throw new common_1.RequestTimeoutException('Unable to process request at the moment', {
                description: 'Error connecting to the database',
            });
        }
        if (existingUser)
            throw new common_1.BadRequestException('User with email already exists');
        const user = this.userRepository.create({
            ...createUserDto,
            password: await this.hashingProvider.hashPassword(createUserDto.password),
        });
        try {
            await this.userRepository.save(user);
        }
        catch (err) {
            throw new common_1.RequestTimeoutException('There was an error saving user', {
                description: 'Error connecting to database',
            });
        }
        try {
            await this.mailService.sendUserWelcome(user);
        }
        catch (err) {
            throw new common_1.RequestTimeoutException(err);
        }
        return user;
    }
    findAll(getUserParamDto, limit, page) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.MOVED_PERMANENTLY,
            error: 'The API endpoint does not exist',
            fileName: 'users.service.ts',
            lineNumber: 88,
        }, common_1.HttpStatus.MOVED_PERMANENTLY);
    }
};
exports.CreateUserProvider = CreateUserProvider;
exports.CreateUserProvider = CreateUserProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => hashing_provider_1.HashingProvider))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        hashing_provider_1.HashingProvider,
        mail_service_1.MailService])
], CreateUserProvider);
//# sourceMappingURL=create-user.provider.js.map