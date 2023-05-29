import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Tempo } from "../../entities/tempo.entities";

const recuperarTempoService = async () => {
  const tempoRepositorio: Repository<Tempo> =
    AppDataSource.getRepository(Tempo);

  const tempo = await tempoRepositorio
    .createQueryBuilder("tempo")
    .where("tempo.id = :id", { id: 1 })
    .getOne();

  return tempo;
};

export default recuperarTempoService;
