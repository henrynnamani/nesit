import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class GetPostQueryParamDto {
    @IsInt()
    @IsOptional()
    // @Type(() => Number)
    userId: string;
}