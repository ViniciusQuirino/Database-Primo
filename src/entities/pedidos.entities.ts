import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryColumn,
  Repository,
} from "typeorm";
import AppDataSource from "../data-source";

@Entity("pedidos")
class Pedidos {
  @PrimaryColumn()
  id: number;

  @Column({ length: 255, nullable: true })
  qnt: string;

  @Column({ length: 15, nullable: true, default: "" })
  formadepagamento: string;

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ nullable: true })
  qntrefrigerante: number;

  @Column({ length: 70, nullable: true })
  refrigerante: string;

  @Column({ length: 255, nullable: true })
  endereco: string;

  @Column({ length: 255, nullable: true })
  troco: string;

  @Column({ length: 50, nullable: true })
  data: string;

  @Column({ default: false })
  msgwhats: boolean;

  @Column({ nullable: true, default: 1 })
  loop: number;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho1: string;

  @Column({ length: 255, nullable: true })
  sabor1: string;

  @Column({ length: 255, nullable: true })
  bordarecheada1: string;

  @Column({ length: 255, nullable: true })
  obs1: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho2: string;

  @Column({ length: 255, nullable: true })
  sabor2: string;

  @Column({ length: 255, nullable: true })
  bordarecheada2: string;

  @Column({ length: 255, nullable: true })
  obs2: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho3: string;

  @Column({ length: 255, nullable: true })
  sabor3: string;

  @Column({ length: 255, nullable: true })
  bordarecheada3: string;

  @Column({ length: 255, nullable: true })
  obs3: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho4: string;

  @Column({ length: 255, nullable: true })
  sabor4: string;

  @Column({ length: 255, nullable: true })
  bordarecheada4: string;

  @Column({ length: 255, nullable: true })
  obs4: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho5: string;

  @Column({ length: 255, nullable: true })
  sabor5: string;

  @Column({ length: 255, nullable: true })
  bordarecheada5: string;

  @Column({ length: 255, nullable: true })
  obs5: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho6: string;

  @Column({ length: 255, nullable: true })
  sabor6: string;

  @Column({ length: 255, nullable: true })
  bordarecheada6: string;

  @Column({ length: 255, nullable: true })
  obs6: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho7: string;

  @Column({ length: 255, nullable: true })
  sabor7: string;

  @Column({ length: 255, nullable: true })
  bordarecheada7: string;

  @Column({ length: 255, nullable: true })
  obs7: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho8: string;

  @Column({ length: 255, nullable: true })
  sabor8: string;

  @Column({ length: 255, nullable: true })
  bordarecheada8: string;

  @Column({ length: 255, nullable: true })
  obs8: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho9: string;

  @Column({ length: 255, nullable: true })
  sabor9: string;

  @Column({ length: 255, nullable: true })
  bordarecheada9: string;

  @Column({ length: 255, nullable: true })
  obs9: string;
  // --------------------------------------------------------------------------------
  @Column({ length: 20, nullable: true })
  tamanho10: string;

  @Column({ length: 255, nullable: true })
  sabor10: string;

  @Column({ length: 255, nullable: true })
  bordarecheada10: string;

  @Column({ length: 255, nullable: true })
  obs10: string;
  // --------------------------------------------------------------------------------

  @BeforeInsert()
  async antesDeInserir() {
    const dataDeHoje = new Date();

    const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

    this.data = formatar;

    const pedidosRepositorio: Repository<Pedidos> =
      AppDataSource.getRepository(Pedidos);

    const ultimoPedido = await pedidosRepositorio
      .createQueryBuilder("entregas")
      .orderBy("entregas.id", "DESC")
      .limit(1)
      .getOne();

    if (!ultimoPedido) {
      this.id = 1;
    } else if (ultimoPedido) {
      this.id = ultimoPedido.id + 1;
    }
  }
}

export { Pedidos };
