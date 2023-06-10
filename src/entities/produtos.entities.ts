import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")
class Produtos {
  @PrimaryGeneratedColumn("increment")
  idd: string;

  @Column({ length: 150, nullable: true })
  refri: string;

  @Column({ length: 150, nullable: true })
  borda: string;

  @Column({ length: 150, nullable: true })
  ingredientes: string;

  @Column({ length: 150, nullable: true })
  entrega: string;

  @Column({ nullable: true })
  valor: number;
}

export { Produtos };
