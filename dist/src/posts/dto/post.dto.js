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
exports.CreatePostDto = exports.GetPostQueryParamDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const postType_enum_1 = require("../enums/postType.enum");
const postStatus_enum_1 = require("../enums/postStatus.enum");
const create_post_meta_option_dto_1 = require("../../meta-options/dto/create-post-meta-option.dto");
const swagger_1 = require("@nestjs/swagger");
class GetPostQueryParamDto {
    userId;
}
exports.GetPostQueryParamDto = GetPostQueryParamDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetPostQueryParamDto.prototype, "userId", void 0);
class CreatePostDto {
    title;
    postType;
    slug;
    status;
    content;
    schema;
    featuredImageUrl;
    publishOn;
    tags;
    metaOptions;
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Post title',
        example: 'buliding a new server',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(512),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'post | page | stories | series',
        example: 'post',
        enum: postType_enum_1.PostType,
    }),
    (0, class_validator_1.IsEnum)(postType_enum_1.PostType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "postType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'slug of post',
        example: 'slug-one',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be small letters and uses only "-" and without spaces. For example "my-url"',
    }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: postStatus_enum_1.PostStatus,
        description: 'draft | scheduled | review | published',
        example: 'published',
    }),
    (0, class_validator_1.IsEnum)(postStatus_enum_1.PostStatus),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'This is content of the post',
        example: 'War occuring in the middle east.',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Serialize the JSON object else validation error will be thrown',
        example: '{\r\n \"@context\": \"https:\/\/schema.org\",\r\n \"@type\": \"Person\" \r\n',
    }),
    (0, class_validator_1.IsJSON)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "schema", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'imageUrl of featured post',
        example: 'https://i.pinimg.com/736x/e4/4a/a1/e44aa117af8e511fc7353735e963f6b8.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "featuredImageUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Post published date',
        example: '2025-06-14T10:32:45.000Z',
    }),
    (0, class_validator_1.IsISO8601)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "publishOn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Array of tags ID',
        example: [3, 4, 2],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: create_post_meta_option_dto_1.CreatePostMetaOptionDto,
        required: false,
        items: {
            type: 'object',
            properties: {
                metaValue: {
                    type: 'object',
                    description: 'Meta value is a JSON string',
                    example: '{ "sideBarEnabled": true }',
                },
            },
        },
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_post_meta_option_dto_1.CreatePostMetaOptionDto),
    __metadata("design:type", create_post_meta_option_dto_1.CreatePostMetaOptionDto)
], CreatePostDto.prototype, "metaOptions", void 0);
//# sourceMappingURL=post.dto.js.map