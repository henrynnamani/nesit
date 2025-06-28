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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tag_entity_1 = require("../tag.entity");
const typeorm_2 = require("typeorm");
let TagsService = class TagsService {
    tagRepository;
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async create(createTagDto) {
        let tag = this.tagRepository.create(createTagDto);
        return await this.tagRepository.save(tag);
    }
    async findMultipleTags(tags) {
        let result = await this.tagRepository.find({
            where: {
                id: (0, typeorm_2.In)(tags),
            },
        });
        return result;
    }
    async deleteTag(id) {
        await this.tagRepository.delete(id);
        return {
            deleted: true,
            id,
        };
    }
    async softDelete(id) {
        await this.tagRepository.softDelete(id);
        return {
            deleted: true,
            id,
        };
    }
};
exports.TagsService = TagsService;
exports.TagsService = TagsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagsService);
//# sourceMappingURL=tags.service.js.map