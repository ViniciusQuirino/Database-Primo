import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Etapas } from "../../entities/etapas.entities";

const recuperarEtapaService = async (params: string) => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  const etapas = await etapasRepositorio
    .createQueryBuilder("etapas")
    .where("etapas.telefone = :telefone", { telefone: params })
    .orderBy("etapas.id", "DESC")
    .limit(1)
    .getOne();

  return etapas;
};

export default recuperarEtapaService;
