import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Tempo } from "../../entities/tempo.entities";

const atualizarTempoService = async (body) => {
  const tempoRepositorio: Repository<Tempo> =
    AppDataSource.getRepository(Tempo);

  const encontrarTempo = await tempoRepositorio
    .createQueryBuilder("tempo")
    .where("tempo.id = :id", { id: 1 })
    .getOne();

  const tempo: Tempo = await tempoRepositorio.save({
    ...encontrarTempo,
    ...body,
  });
  return tempo;
};

export default atualizarTempoService;
