import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./errors/appError";
import etapasRoutes from "./routes/etapas.routes";
import pedidosRoutes from "./routes/pedidos.routes";
import tempoRoutes from "./routes/tempo.routes";
import pizzasRoutes from "./routes/pizzas.routes";
import produtosRoutes from "./routes/produtos.routes";
import AppDataSource from "./data-source";
import { Repository } from "typeorm";
import { Pedidos } from "./entities/pedidos.entities";
const CronJob = require("cron").CronJob;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/etapas", etapasRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/tempo", tempoRoutes);
app.use("/pizzas", pizzasRoutes);
app.use("/produtos", produtosRoutes);

app.use(handleErrorMiddleware);

const job = new CronJob("0 0 */2 * *", async () => {
  const pedidosRepositorio: Repository<Pedidos> =
    AppDataSource.getRepository(Pedidos);

  await pedidosRepositorio
    .createQueryBuilder()
    .delete()
    .from(Pedidos)
    .execute();
});
job.start();

export default app;
