import type { ICreateRelatorioDTO, IRelatorio, IUpdateRelatorioDTO } from "../../../domain/entities/relatorio.entity.js"
import type { IBaseRepository } from "./base.repository.js"

export interface IRelatorioRepository extends IBaseRepository<IRelatorio, ICreateRelatorioDTO, IUpdateRelatorioDTO> {}
