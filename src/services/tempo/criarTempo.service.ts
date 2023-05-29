import AppDataSource from "../../data-source";
import { Tempo } from "../../entities/tempo.entities";

const criarTempoService = async (body: any) => {
  const tempoRepositorio = AppDataSource.getRepository(Tempo);

  const tempo = tempoRepositorio.create(body);

  await tempoRepositorio.save(tempo);

  return tempo;
};

export default criarTempoService;
