import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("tempo")
class Tempo {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 150, nullable: true })
  tempoentrega: string;

  @Column({ length: 150, nullable: true })
  temporetirada: string;
}

export { Tempo };
