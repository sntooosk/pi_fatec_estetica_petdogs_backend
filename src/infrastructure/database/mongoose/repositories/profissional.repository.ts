import type { ICreateProfissionaleDTO, IProfissional, IUpdateProfissionalDTO } from "../../../../domain/entities/profissional.entity.js"
import type { IProfissionalRepository } from "../../../../application/ports/repositories/profissional.repository.js"
import Profissional from "../models/profissional.model.js"
import { MongooseBaseRepository } from "./mongoose-base.repository.js"

class MongooseProfissionalRepository extends MongooseBaseRepository<IProfissional, ICreateProfissionaleDTO, IUpdateProfissionalDTO> implements IProfissionalRepository {
    constructor() {
        super(Profissional)
    }

    async findByEmail(email: string, includePassword = false): Promise<IProfissional | null> {
        const query = Profissional.findOne({ email })
        if (includePassword) query.select("+senha")
        return await query.exec()
    }
}

export const profissionalRepository = new MongooseProfissionalRepository()
