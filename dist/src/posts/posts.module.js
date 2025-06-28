"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./providers/posts.service");
const posts_controller_1 = require("./posts.controller");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const meta_options_entity_1 = require("../meta-options/meta-options.entity");
const post_entity_1 = require("./post.entity");
const tags_module_1 = require("../tags/tags.module");
const pagination_module_1 = require("../common/pagination/pagination.module");
const create_post_provider_1 = require("./providers/create-post.provider");
let PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule;
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.Post, meta_options_entity_1.MetaOption]),
            users_module_1.UsersModule,
            tags_module_1.TagsModule,
            pagination_module_1.PaginationModule,
        ],
        controllers: [posts_controller_1.PostsController],
        providers: [posts_service_1.PostsService, create_post_provider_1.CreatePostProvider],
    })
], PostsModule);
//# sourceMappingURL=posts.module.js.map