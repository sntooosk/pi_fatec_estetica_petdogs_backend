import type { ICreateRelatorioDTO, IRelatorio, IUpdateRelatorioDTO } from "../../../../domain/entities/relatorio.entity.js"
import type { IRelatorioRepository } from "../../../../application/ports/repositories/relatorio.repository.js"
import Relatorio from "../models/relatorio.model.js"
import { MongooseBaseRepository } from "./mongoose-base.repository.js"

export const relatorioRepository: IRelatorioRepository = new MongooseBaseRepository<IRelatorio, ICreateRelatorioDTO, IUpdateRelatorioDTO>(Relatorio)
