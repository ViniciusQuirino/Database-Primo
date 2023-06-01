import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Pizzas } from "../../entities/pizzas.entities";

const listarPizzasService = async () => {
  const pizzasRepositorio: Repository<Pizzas> =
    AppDataSource.getRepository(Pizzas);

  const pizzas: Pizzas[] = await pizzasRepositorio
    .createQueryBuilder("pizzas")
    .getMany();

  return pizzas;
};

export default listarPizzasService;
