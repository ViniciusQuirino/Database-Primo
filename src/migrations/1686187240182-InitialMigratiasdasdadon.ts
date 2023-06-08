import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigratiasdasdadon1686187240182 implements MigrationInterface {
    name = 'InitialMigratiasdasdadon1686187240182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tempo" ADD "imprevisto" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tempo" DROP COLUMN "imprevisto"`);
    }

}
