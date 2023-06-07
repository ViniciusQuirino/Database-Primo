import AppDataSource from "../../data-source";
import { Produtos } from "../../entities/produtos.entities";

const criarProdutoService = async (body: any) => {
  const produtosRepositorio = AppDataSource.getRepository(Produtos);

  const produto = produtosRepositorio.create(body);

  await produtosRepositorio.save(produto);

  return produto;
};

export default criarProdutoService;
