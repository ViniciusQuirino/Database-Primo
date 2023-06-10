import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  Repository,
} from "typeorm";
import AppDataSource from "../data-source";

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

  @Column({ default: true })
  ativado2: boolean;

  @Column({ nullable: true })
  problema: number;

  @Column({ length: 50, nullable: true })
  data: string;

  @BeforeInsert()
  async antesDeInserir() {
    const dataDeHoje = new Date();

    const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

    this.data = formatar;
  }
}

export { Etapas };
