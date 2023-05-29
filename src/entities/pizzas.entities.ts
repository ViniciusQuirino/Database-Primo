import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pizzas")
class Pizzas {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 100, nullable: true })
  nome: string;

  @Column({ nullable: true })
  grande: number;

  @Column({ nullable: true })
  media: number;
}

export { Pizzas };
