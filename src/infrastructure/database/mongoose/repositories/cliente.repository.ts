import type { ICliente, ICreateClienteDTO, IUpdateClienteDTO } from "../../../../domain/entities/cliente.entity.js"
import type { IClienteRepository } from "../../../../application/ports/repositories/cliente.repository.js"
import Cliente from "../models/cliente.model.js"
import { MongooseBaseRepository } from "./mongoose-base.repository.js"

class MongooseClienteRepository extends MongooseBaseRepository<ICliente, ICreateClienteDTO, IUpdateClienteDTO> implements IClienteRepository {
    constructor() {
        super(Cliente)
    }

    async findByEmail(email: string, includePassword = false): Promise<ICliente | null> {
        const query = Cliente.findOne({ email })
        if (includePassword) query.select("+senha")
        return await query.exec()
    }

    async findByResetToken(token: string): Promise<ICliente | null> {
        return await Cliente.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: new Date() } })
            .select("+resetPasswordToken +resetPasswordExpires")
            .exec()
    }
}

export const clienteRepository = new MongooseClienteRepository()
