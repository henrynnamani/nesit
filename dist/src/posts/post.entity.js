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
exports.Post = void 0;
const typeorm_1 = require("typeorm");
const postType_enum_1 = require("./enums/postType.enum");
const postStatus_enum_1 = require("./enums/postStatus.enum");
const meta_options_entity_1 = require("../meta-options/meta-options.entity");
const user_entity_1 = require("../users/user.entity");
const tag_entity_1 = require("../tags/tag.entity");
let Post = class Post {
    id;
    title;
    postType;
    slug;
    status;
    content;
    schema;
    featuredImageUrl;
    publishOn;
    tags;
    author;
    metaOptions;
};
exports.Post = Post;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 512,
        nullable: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: postType_enum_1.PostType,
        nullable: false,
        default: postType_enum_1.PostType.POST,
    }),
    __metadata("design:type", String)
], Post.prototype, "postType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: postStatus_enum_1.PostStatus,
        default: postStatus_enum_1.PostStatus.DRAFT,
        nullable: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Post.prototype, "schema", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Post.prototype, "featuredImageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Post.prototype, "publishOn", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_entity_1.Tag, (tag) => tag.posts),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Post.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.posts, {
        eager: true,
    }),
    __metadata("design:type", user_entity_1.User)
], Post.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => meta_options_entity_1.MetaOption, (metaOption) => metaOption.post, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", meta_options_entity_1.MetaOption)
], Post.prototype, "metaOptions", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)('post')
], Post);
//# sourceMappingURL=post.entity.js.map