import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("etapas")
class Etapas {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ length: 5, nullable: true })
  etapa: string;

  @Column({ default: true })
  ativado: boolean;
}

export { Etapas };
