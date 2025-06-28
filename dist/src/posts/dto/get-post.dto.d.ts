import { PaginationQueryDto } from 'src/common/pagination/dto/pagination.dto';
declare class GetPostBaseDto {
    startDate?: Date;
    endDate?: Date;
}
declare const GetPostsDto_base: import("@nestjs/common").Type<PaginationQueryDto & GetPostBaseDto>;
export declare class GetPostsDto extends GetPostsDto_base {
}
export {};
