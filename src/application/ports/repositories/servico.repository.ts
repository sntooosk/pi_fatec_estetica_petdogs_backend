import type { ICreateServicoDTO, IServico, IUpdateServicoDTO } from "../../../domain/entities/servico.entity.js"
import type { IBaseRepository } from "./base.repository.js"

export interface IServicoRepository extends IBaseRepository<IServico, ICreateServicoDTO, IUpdateServicoDTO> {}
