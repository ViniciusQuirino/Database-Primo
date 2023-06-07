import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Pedidos } from "../../entities/pedidos.entities";

const atualizarPedidoService = async (body) => {
  const pedidosRepositorio: Repository<Pedidos> =
    AppDataSource.getRepository(Pedidos);

  const ultimoPedido = await pedidosRepositorio
    .createQueryBuilder("pedidos")
    .where("pedidos.telefone = :telefone", { telefone: body.telefone })
    .orderBy("pedidos.id", "DESC")
    .limit(1)
    .getOne();

  const dataDeHoje = new Date();

  const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

  if (body.b == undefined) {
    const pedido: Pedidos = await pedidosRepositorio.save({
      ...ultimoPedido,
      ...body,
      data: formatar,
    });
    return pedido;
  } else if (body.b == "loop") {
    const pedido: Pedidos = await pedidosRepositorio.save({
      ...ultimoPedido,
      ...body,
      loop: ultimoPedido.loop + 1,
      data: formatar,
    });
    return pedido;
  }
};

export default atualizarPedidoService;
