import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationv1685560048517 implements MigrationInterface {
    name = 'InitialMigrationv1685560048517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "total" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "total"`);
    }

}
