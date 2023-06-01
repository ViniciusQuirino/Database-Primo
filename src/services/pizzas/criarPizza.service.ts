import AppDataSource from "../../data-source";
import { Pizzas } from "../../entities/pizzas.entities";

const criarPizzaService = async (body: any) => {
  const pizzasRepositorio = AppDataSource.getRepository(Pizzas);

  const pizza = pizzasRepositorio.create(body);

  await pizzasRepositorio.save(pizza);

  return pizza;
};

export default criarPizzaService;
