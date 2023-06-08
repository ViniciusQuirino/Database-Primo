import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Produtos } from "../../entities/produtos.entities";

const listarProdutosService = async () => {
  const produtosRepositorio: Repository<Produtos> =
    AppDataSource.getRepository(Produtos);

  const produtos: Produtos[] = await produtosRepositorio
    .createQueryBuilder("produtos")
    .orderBy("produtos.idd", "ASC")
    .getMany();

  return produtos;
};

export default listarProdutosService;
