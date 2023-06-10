import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationaaab1686400202723 implements MigrationInterface {
    name = 'InitialMigrationaaab1686400202723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "entrega" character varying(150)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "entrega"`);
    }

}
