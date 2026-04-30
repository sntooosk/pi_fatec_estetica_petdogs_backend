/* 
   ele será reponsavel por 
    . criar categoria
    . listar categoria
    . buscar categoria por id
    . atualizar  categoria
    . excluir categoria



    não recebe req e resp
    não define rotas
    não sabe nada de HTTP

*/

import servicoController from "./servico.controller.js";
import Servico from "./servico.model.js";
import type {
  ICreateServicoDTO,
  IUpdateServicoDTO
} from "./servico.types.js";

class ServicoService {


  public async create(data: ICreateServicoDTO) {
    const servico = await Servico.create({
      name: data.name,
      duracao_min: data.duracao_min,
      preco: data.preco
    });
    return servico;
  }

  public async findAll() {
    return await Servico.find();

  }

  public async findById(id: string) {
    return await Servico.findById(id);

  }

  public async delete(id: string) {
    return await Servico.findByIdAndDelete(id);
  }

  public async update(id: string, data: IUpdateServicoDTO) {
    return await Servico.findByIdAndUpdate(id, data, {

    })
  }
}

export default new ServicoService();