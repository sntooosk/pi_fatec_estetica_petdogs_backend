import type { ICliente, ICreateClienteDTO, IUpdateClienteDTO } from "../../../domain/entities/cliente.entity.js"
import type { IBaseRepository } from "./base.repository.js"

export interface IClienteRepository extends IBaseRepository<ICliente, ICreateClienteDTO, IUpdateClienteDTO> {
    findByEmail(email: string, includePassword?: boolean): Promise<ICliente | null>
    findByResetToken(token: string): Promise<ICliente | null>
}
