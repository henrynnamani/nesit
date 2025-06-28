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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/provider/users.service");
const typeorm_1 = require("typeorm");
const post_entity_1 = require("../post.entity");
const typeorm_2 = require("@nestjs/typeorm");
const tags_service_1 = require("../../tags/provider/tags.service");
const pagination_provider_1 = require("../../common/pagination/providers/pagination.provider");
const create_post_provider_1 = require("./create-post.provider");
let PostsService = class PostsService {
    usersService;
    postRepository;
    tagsService;
    paginationProvider;
    createPostProvider;
    constructor(usersService, postRepository, tagsService, paginationProvider, createPostProvider) {
        this.usersService = usersService;
        this.postRepository = postRepository;
        this.tagsService = tagsService;
        this.paginationProvider = paginationProvider;
        this.createPostProvider = createPostProvider;
    }
    async findAll(postQuery, userId) {
        let posts = await this.paginationProvider.paginateQuery({
            limit: postQuery.limit,
            page: postQuery.page,
        }, this.postRepository);
        return posts;
    }
    async delete(id) {
        await this.postRepository.delete(id);
        return {
            deleted: true,
            id,
        };
    }
    async create(user, createPostDto) {
        return this.createPostProvider.createPost(user, createPostDto);
    }
    async update(patchPostDto) {
        let tags;
        let post;
        try {
            tags =
                patchPostDto.tags &&
                    (await this.tagsService.findMultipleTags(patchPostDto.tags));
        }
        catch (err) {
            throw new common_1.RequestTimeoutException('Unable to find tags', {
                description: 'Error connecting to database',
            });
        }
        if (!tags || tags.length !== patchPostDto.tags.length) {
            throw new common_1.BadRequestException('Please check that you include correct tags');
        }
        try {
            post = await this.postRepository.findOneBy({
                id: patchPostDto.id,
            });
        }
        catch (err) {
            throw new common_1.RequestTimeoutException('Unable to find tags', {
                description: 'Error connecting to database',
            });
        }
        if (!post) {
            throw new common_1.NotFoundException('Post does not exist');
        }
        post.title = patchPostDto.title ?? post.title;
        post.content = patchPostDto.content ?? post.content;
        post.status = patchPostDto.status ?? post.status;
        post.postType = patchPostDto.postType ?? post.postType;
        post.slug = patchPostDto.slug ?? post.slug;
        post.featuredImageUrl =
            patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
        post.publishOn = patchPostDto.publishOn ?? post.publishOn;
        post.tags = tags;
        try {
            await this.postRepository.save(post);
        }
        catch (err) {
            throw new common_1.RequestTimeoutException('Unable to find tags', {
                description: 'Error connecting to database',
            });
        }
        return post;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        typeorm_1.Repository,
        tags_service_1.TagsService,
        pagination_provider_1.PaginationProvider,
        create_post_provider_1.CreatePostProvider])
], PostsService);
//# sourceMappingURL=posts.service.js.map