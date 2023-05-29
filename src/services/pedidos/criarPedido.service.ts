import AppDataSource from "../../data-source";
import { Pedidos } from "../../entities/pedidos.entities";

const criarPedidoService = async (body: any) => {
  const pedidosRepositorio = AppDataSource.getRepository(Pedidos);

  const pedidos = pedidosRepositorio.create(body);

  await pedidosRepositorio.save(pedidos);

  return pedidos;
};

export default criarPedidoService;
