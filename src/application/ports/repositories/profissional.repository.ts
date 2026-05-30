import type { IProfissional, ICreateProfissionaleDTO, IUpdateProfissionalDTO } from "../../../domain/entities/profissional.entity.js"
import type { IBaseRepository } from "./base.repository.js"

export interface IProfissionalRepository extends IBaseRepository<IProfissional, ICreateProfissionaleDTO, IUpdateProfissionalDTO> {
    findByEmail(email: string, includePassword?: boolean): Promise<IProfissional | null>
}
