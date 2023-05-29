import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Pedidos } from "../../entities/pedidos.entities";

const deletarPedidosService = async (): Promise<void> => {
  const pedidosRepositorio: Repository<Pedidos> =
    AppDataSource.getRepository(Pedidos);

  await pedidosRepositorio
    .createQueryBuilder()
    .delete()
    .from(Pedidos)
    .execute();
};

export default deletarPedidosService;
