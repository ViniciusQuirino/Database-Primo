import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Etapas } from "../../entities/etapas.entities";

const ativarChatbotService = async () => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  const etapas = await etapasRepositorio
    .createQueryBuilder("etapas")
    .orderBy("etapas.id", "DESC")
    .getMany();

  const dataDeHoje = new Date();

  for (let dados of etapas) {
    const dia = dados.data.slice(0, 2);
    const mes = dados.data.slice(3, 5);
    const ano = dados.data.slice(6, 10);
    const hora = dados.data.slice(12, 14);
    const minutos = dados.data.slice(15, 17);
    const segundos = dados.data.slice(18, 20);

    const db = new Date(
      `${ano}-${mes}-${dia}T${hora}:${minutos}:${segundos}+00:00`
    );

    const timesDB = db.getTime();

    const agora = dataDeHoje.getTime();

    if (agora - 7200000 >= timesDB) {
      console.log(dados.etapa);
      if (dados.etapa == "ajud") {
        await etapasRepositorio.save({
          ...dados,
          etapa: "a",
          ativado2: true,
        });
      }
    }

    if (agora - 7200000 >= timesDB) {
      await etapasRepositorio.save({
        ...dados,
        etapa: "a",
        ativado2: true,
      });
    }
  }

  return etapas;
};

export default ativarChatbotService;
