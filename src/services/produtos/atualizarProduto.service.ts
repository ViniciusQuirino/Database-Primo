import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { AppError } from "../../errors/appError";
import { Produtos } from "../../entities/produtos.entities";

const atualizarProdutoService = async (body, params) => {
  const produtosRepositorio: Repository<Produtos> =
    AppDataSource.getRepository(Produtos);

  const encontrar = await produtosRepositorio
    .createQueryBuilder("produtos")
    .where("produtos.idd = :idd", { idd: params })
    .getOne();

  if (!encontrar) {
    throw new AppError("Esse id de produto não existe", 401);
  }

  const produto: Produtos = await produtosRepositorio.save({
    ...encontrar,
    ...body,
  });

  return produto;
};

export default atualizarProdutoService;
