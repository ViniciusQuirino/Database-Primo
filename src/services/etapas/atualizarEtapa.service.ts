import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Etapas } from "../../entities/etapas.entities";

const atualizarEtapaService = async (params: string, body: any) => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  const etapas = await etapasRepositorio
    .createQueryBuilder("etapas")
    .where("etapas.telefone = :telefone", { telefone: params })
    .orderBy("etapas.id", "DESC")
    .limit(1)
    .getOne();

  if (body.problema != undefined && body.problema != 0) {
    const novaEtapa: Etapas = await etapasRepositorio.save({
      ...etapas,
      problema: etapas.problema + 1,
    });
    return novaEtapa;
  }

  if (etapas) {
    const novaEtapa: Etapas = await etapasRepositorio.save({
      ...etapas,
      ...body,
      problema: 0,
    });

    return novaEtapa;
  } else {
    throw new AppError("Não existe esse numero no banco de dados", 400);
  }
};

export default atualizarEtapaService;
