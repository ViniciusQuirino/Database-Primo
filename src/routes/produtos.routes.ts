import { Router } from "express";
import criarProdutoController from "../controllers/produtos/criarProduto.controller";
import listarProdutosController from "../controllers/produtos/listarProdutos.controller";
import atualizarProdutoController from "../controllers/produtos/atualizarProduto.controller";

const produtosRoutes: Router = Router();

produtosRoutes.post("", criarProdutoController);
produtosRoutes.get("", listarProdutosController);
produtosRoutes.patch("/:id", atualizarProdutoController);

export default produtosRoutes;
