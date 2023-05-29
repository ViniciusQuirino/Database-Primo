import AppDataSource from "../../data-source";
import { Etapas } from "../../entities/etapas.entities";

const criarEtapaService = async (body: any) => {
  const etapasRepositorio = AppDataSource.getRepository(Etapas);

  const etapas = etapasRepositorio.create(body);

  await etapasRepositorio.save(etapas);

  return etapas;
};

export default criarEtapaService;
