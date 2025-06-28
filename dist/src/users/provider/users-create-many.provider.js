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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateManyProvider = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user.entity");
let UsersCreateManyProvider = class UsersCreateManyProvider {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async createMany(createUsersDto) {
        let users = [];
        const queryRunner = this.dataSource.createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
        }
        catch (err) {
            await queryRunner.release();
            throw new common_1.ConflictException('Error initiating transaction');
        }
        try {
            users = await Promise.all(createUsersDto?.users.map(async (user) => {
                let newUser = queryRunner.manager.create(user_entity_1.User, user);
                return await queryRunner.manager.save(newUser);
            }));
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
        return users;
    }
};
exports.UsersCreateManyProvider = UsersCreateManyProvider;
exports.UsersCreateManyProvider = UsersCreateManyProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UsersCreateManyProvider);
//# sourceMappingURL=users-create-many.provider.js.map