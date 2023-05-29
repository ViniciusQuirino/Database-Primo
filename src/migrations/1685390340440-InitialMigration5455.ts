import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration54551685390340440 implements MigrationInterface {
    name = 'InitialMigration54551685390340440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "etapas" ("id" SERIAL NOT NULL, "telefone" character varying(20), "etapa" character varying(5), "ativado" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_26de329bbb63ed9c4e4023b6c2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" integer NOT NULL, "qnt" character varying(255), "formadepagamento" character varying(15) DEFAULT '', "telefone" character varying(20), "qntrefrigerante" integer, "refrigerante" character varying(70), "endereco" character varying(255), "troco" character varying(255), "data" character varying(50), "msgwhats" boolean NOT NULL DEFAULT false, "loop" integer DEFAULT '1', "tamanho1" character varying(20), "sabor1" character varying(255), "bordarecheada1" character varying(255), "obs1" character varying(255), "tamanho2" character varying(20), "sabor2" character varying(255), "bordarecheada2" character varying(255), "obs2" character varying(255), "tamanho3" character varying(20), "sabor3" character varying(255), "bordarecheada3" character varying(255), "obs3" character varying(255), "tamanho4" character varying(20), "sabor4" character varying(255), "bordarecheada4" character varying(255), "obs4" character varying(255), "tamanho5" character varying(20), "sabor5" character varying(255), "bordarecheada5" character varying(255), "obs5" character varying(255), "tamanho6" character varying(20), "sabor6" character varying(255), "bordarecheada6" character varying(255), "obs6" character varying(255), "tamanho7" character varying(20), "sabor7" character varying(255), "bordarecheada7" character varying(255), "obs7" character varying(255), "tamanho8" character varying(20), "sabor8" character varying(255), "bordarecheada8" character varying(255), "obs8" character varying(255), "tamanho9" character varying(20), "sabor9" character varying(255), "bordarecheada9" character varying(255), "obs9" character varying(255), "tamanho10" character varying(20), "sabor10" character varying(255), "bordarecheada10" character varying(255), "obs10" character varying(255), CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pizzas" ("id" SERIAL NOT NULL, "nome" character varying(100), "grande" integer, "media" integer, CONSTRAINT "PK_27f7ede7b9304d8372a336d1e5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tempo" ("id" SERIAL NOT NULL, "tempoentrega" character varying(150), "temporetirada" character varying(150), CONSTRAINT "PK_7e28a87c8258a4164e92fa829a1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tempo"`);
        await queryRunner.query(`DROP TABLE "pizzas"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "etapas"`);
    }

}
