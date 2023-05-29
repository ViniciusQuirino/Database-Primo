import AppDataSource from "../../data-source";
import { Pedidos } from "../../entities/pedidos.entities";

const criarPizzaService = async (body: any) => {
  const pizzasRepositorio = AppDataSource.getRepository(Pedidos);

  const pizza = pizzasRepositorio.create(body);

  await pizzasRepositorio.save(pizza);

  return pizza;
};

export default criarPizzaService;
