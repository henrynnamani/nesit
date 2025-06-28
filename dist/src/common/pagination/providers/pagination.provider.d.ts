import { PaginationQueryDto } from '../dto/pagination.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { Request } from 'express';
import { Paginated } from '../interfaces/paginated.interface';
export declare class PaginationProvider {
    private readonly request;
    constructor(request: Request);
    paginateQuery<T extends ObjectLiteral>(paginationQuery: PaginationQueryDto, repository: Repository<T>): Promise<Paginated<T>>;
}
