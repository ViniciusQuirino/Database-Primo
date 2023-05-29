import { ILike, Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Pedidos } from "../../entities/pedidos.entities";

const listarPedidosService = async (params) => {
  if (params) {
    const pedidosRepositorio: Repository<Pedidos> =
      AppDataSource.getRepository(Pedidos);

    let inicio = params.slice(0, 2);
    let final = params.slice(params.length - 2);

    const pedidos: Pedidos[] = await pedidosRepositorio
      .createQueryBuilder("pedidos")
      .where("pedidos.data like :diaMes", {
        diaMes: `%${inicio}/${final}%`,
      })
      .andWhere("pedidos.formadepagamento != :formadepagamento", {
        formadepagamento: "",
      })
      .getMany();

    return pedidos;
  }
};

export default listarPedidosService;
