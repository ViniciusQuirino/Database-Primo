import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration242431685992740112 implements MigrationInterface {
    name = 'InitialMigration242431685992740112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "etapas" ADD "problema" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "etapas" DROP COLUMN "problema"`);
    }

}
