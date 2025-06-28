import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FirstMigration1751139307305 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
