import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Pizzas } from "../../entities/pizzas.entities";
import { Produtos } from "../../entities/produtos.entities";

const listarPizzasService = async () => {
  const pizzasRepositorio: Repository<Pizzas> =
    AppDataSource.getRepository(Pizzas);

  const pizzas: Pizzas[] = await pizzasRepositorio
    .createQueryBuilder("pizzas")
    .orderBy("pizzas.id", "ASC")
    .getMany();

  const produtosRepositorio: Repository<Produtos> =
    AppDataSource.getRepository(Produtos);

  const produtos: Produtos[] = await produtosRepositorio
    .createQueryBuilder("produtos")
    .orderBy("produtos.idd", "ASC")
    .getMany();

  return [...pizzas, ...produtos];
};

export default listarPizzasService;
