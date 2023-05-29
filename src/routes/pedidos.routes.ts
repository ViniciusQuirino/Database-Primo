import { Router } from "express";
import criarPedidoController from "../controllers/pedidos/criarPedido.controller";
import atualizarPedidoController from "../controllers/pedidos/atualizarPedido.controller";
import listarPedidosController from "../controllers/pedidos/listarPedidos.controller";
import encerrarAtendimentoController from "../controllers/pedidos/encerrarAtendimento.controller";
import deletarPedidosController from "../controllers/pedidos/deletarPedidos.controller";
import recuperarPedidoController from "../controllers/pedidos/recuperarPedido.controller";

const pedidosRoutes: Router = Router();

pedidosRoutes.post("", criarPedidoController);
pedidosRoutes.patch("", atualizarPedidoController);
pedidosRoutes.get("/:date", listarPedidosController);
pedidosRoutes.get("/recuperar/:telefone", recuperarPedidoController);
pedidosRoutes.get("", encerrarAtendimentoController);
pedidosRoutes.delete("", deletarPedidosController);

export default pedidosRoutes;
