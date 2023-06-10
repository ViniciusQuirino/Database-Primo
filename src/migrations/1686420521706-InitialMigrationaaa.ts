import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationaaa1686420521706 implements MigrationInterface {
    name = 'InitialMigrationaaa1686420521706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "etapas" ADD "ativado2" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "etapas" DROP COLUMN "ativado2"`);
    }

}
