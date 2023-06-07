import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./errors/appError";
import etapasRoutes from "./routes/etapas.routes";
import pedidosRoutes from "./routes/pedidos.routes";
import tempoRoutes from "./routes/tempo.routes";
import pizzasRoutes from "./routes/pizzas.routes";
import produtosRoutes from "./routes/produtos.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/etapas", etapasRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/tempo", tempoRoutes);
app.use("/pizzas", pizzasRoutes);
app.use("/produtos", produtosRoutes);

app.use(handleErrorMiddleware);

export default app;
