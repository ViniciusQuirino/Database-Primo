import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration2242341686074363044 implements MigrationInterface {
    name = 'InitialMigration2242341686074363044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente1" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente2" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente3" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente4" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente5" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente6" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente7" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente8" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente9" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "adcingrediente10" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente10"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente9"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente8"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente7"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente6"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente5"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente4"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente3"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente2"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "adcingrediente1"`);
    }

}
