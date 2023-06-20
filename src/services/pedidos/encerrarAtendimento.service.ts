import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Pedidos } from "../../entities/pedidos.entities";
import { Etapas } from "../../entities/etapas.entities";

const encerrarAtendimentoService = async () => {
  const pedidosRepositorio: Repository<Pedidos> =
    AppDataSource.getRepository(Pedidos);

  const etapasRepositorio = AppDataSource.getRepository(Etapas);

  const dataDeHoje = new Date();

  const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

  const diaMes = formatar.slice(0, 5);

  // -------------------------------------------------------------------------

  const pedidos: Pedidos[] = await pedidosRepositorio
    .createQueryBuilder("pedidos")
    .where("pedidos.data like :diaMes", {
      diaMes: `%${diaMes}%`,
    })
    .andWhere("pedidos.msgwhats = :msgwhats", {
      msgwhats: false,
    })
    .andWhere("pedidos.pedidoconfirmado = :pedidoconfirmado", {
      pedidoconfirmado: false,
    })
    .getMany();

  // -------------------------------------------------------------------------
  const dadosUnicos = new Map();

  pedidos.forEach((elem) => {
    if (!dadosUnicos.has(elem.telefone)) {
      dadosUnicos.set(elem.telefone, elem);
    }
  });
  const result = [...dadosUnicos.values()];

  // -------------------------------------------------------------------------
  for (let dados of result) {
    const telefone = dados.telefone.slice(0, 13);
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

    if (agora - 1800000 >= timesDB) {
      const date = new Date();
      const h = date.getHours();

      if (h >= 17 && h <= 23) {
        const data = {
          number: telefone,
          message: `Lamentamos, mas devido à falta de resposta ou interação, este *atendimento* foi *encerrado.* Caso precise realizar um pedido futuramente por favor, entre em contato novamente. Estaremos aqui prontamente para atendê-lo.
  
  Obrigado e até a próxima! 😃`,
        };

        await fetch("https://chatbot-pizzaria.up.railway.app/send-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((res) => res)
          .catch((err) => console.log(err));
      }

      const etapas: Etapas = await etapasRepositorio.findOneBy({
        telefone: dados.telefone,
      });

      etapasRepositorio.save({
        ...etapas,
        etapa: "a",
      });
    }
  }
  // -------------------------------------------------------------------------
  for (let dados of pedidos) {
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

    if (agora - 1800000 >= timesDB) {
      await pedidosRepositorio.save({
        ...dados,
        msgwhats: true,
      });
    }
  }

  return result;
};

export default encerrarAtendimentoService;
