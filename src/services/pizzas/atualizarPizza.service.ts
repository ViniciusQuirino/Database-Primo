import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Pizzas } from "../../entities/pizzas.entities";
import { AppError } from "../../errors/appError";

const atualizarPizzaService = async (body, params) => {
  const pizzasRepositorio: Repository<Pizzas> =
    AppDataSource.getRepository(Pizzas);

  const encontrar = await pizzasRepositorio
    .createQueryBuilder("pizzas")
    .where("pizzas.id = :id", { id: params })
    .getOne();

  if (!encontrar) {
    throw new AppError("Esse id de pizza não existe", 401);
  }

  const pizza: Pizzas = await pizzasRepositorio.save({
    ...encontrar,
    ...body,
  });

  return pizza;
};

export default atualizarPizzaService;
