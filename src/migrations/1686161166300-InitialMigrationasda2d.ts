import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationasda2d1686161166300 implements MigrationInterface {
    name = 'InitialMigrationasda2d1686161166300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" RENAME COLUMN "id" TO "idd"`);
        await queryRunner.query(`ALTER TABLE "produtos" RENAME CONSTRAINT "PK_a5d976312809192261ed96174f3" TO "PK_74b630c550e95ba449de2bd7167"`);
        await queryRunner.query(`ALTER SEQUENCE "produtos_id_seq" RENAME TO "produtos_idd_seq"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER SEQUENCE "produtos_idd_seq" RENAME TO "produtos_id_seq"`);
        await queryRunner.query(`ALTER TABLE "produtos" RENAME CONSTRAINT "PK_74b630c550e95ba449de2bd7167" TO "PK_a5d976312809192261ed96174f3"`);
        await queryRunner.query(`ALTER TABLE "produtos" RENAME COLUMN "idd" TO "id"`);
    }

}
