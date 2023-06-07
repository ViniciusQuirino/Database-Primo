import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationasdad1686159336035 implements MigrationInterface {
    name = 'InitialMigrationasdad1686159336035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "refri" character varying(150), "borda" character varying(150), "ingredientes" character varying(150), "valor" integer, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "produtos"`);
    }

}
