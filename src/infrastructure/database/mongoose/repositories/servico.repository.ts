import type { ICreateServicoDTO, IServico, IUpdateServicoDTO } from "../../../../domain/entities/servico.entity.js"
import type { IServicoRepository } from "../../../../application/ports/repositories/servico.repository.js"
import Servico from "../models/servico.model.js"
import { MongooseBaseRepository } from "./mongoose-base.repository.js"

export const servicoRepository: IServicoRepository = new MongooseBaseRepository<IServico, ICreateServicoDTO, IUpdateServicoDTO>(Servico)
