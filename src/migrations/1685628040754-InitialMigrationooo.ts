import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationooo1685628040754 implements MigrationInterface {
    name = 'InitialMigrationooo1685628040754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "cidade" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "cidade"`);
    }

}
