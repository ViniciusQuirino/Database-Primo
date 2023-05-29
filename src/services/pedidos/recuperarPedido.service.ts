import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Pedidos } from "../../entities/pedidos.entities";

const recuperarPedidoService = async (params) => {
  const pedidosRepositorio: Repository<Pedidos> =
    AppDataSource.getRepository(Pedidos);

  const ultimoPedido = await pedidosRepositorio
    .createQueryBuilder("pedidos")
    .where("pedidos.telefone = :telefone", { telefone: params })
    .orderBy("pedidos.id", "DESC")
    .limit(1)
    .getOne();

  return ultimoPedido;
};

export default recuperarPedidoService;
