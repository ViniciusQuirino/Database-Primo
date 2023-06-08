import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMig333ration1686229491900 implements MigrationInterface {
    name = 'InitialMig333ration1686229491900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "pedidoconfirmado" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "pedidoconfirmado"`);
    }

}
