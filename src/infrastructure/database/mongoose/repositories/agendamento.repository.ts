import type { IAgendamento, ICreateAgendamentoDTO, IUpdateAgendamentoDTO } from "../../../../domain/entities/agendamento.entity.js"
import type { UserRole } from "../../../../domain/entities/auth.entity.js"
import type { IAgendamentoRepository } from "../../../../application/ports/repositories/agendamento.repository.js"
import Agendamento from "../models/agendamento.model.js"
import { MongooseBaseRepository } from "./mongoose-base.repository.js"

class MongooseAgendamentoRepository extends MongooseBaseRepository<IAgendamento, ICreateAgendamentoDTO, IUpdateAgendamentoDTO> implements IAgendamentoRepository {
    constructor() {
        super(Agendamento)
    }

    async findScheduledByProfessionalOnDay(profissionalId: string, start: Date, end: Date, excludeId?: string): Promise<IAgendamento[]> {
        const filter: Record<string, unknown> = {
            profissional: profissionalId,
            status: "scheduled",
            data_hora: { $gte: start, $lte: end },
        }

        if (excludeId) filter._id = { $ne: excludeId }

        return await Agendamento.find(filter).populate("servico", "duracao_min").exec()
    }

    async findByUser(user: { id: string; role: UserRole }): Promise<IAgendamento[]> {
        const filter = user.role === "admin" ? {} : user.role === "profissional" ? { profissional: user.id } : { cliente: user.id }

        return await Agendamento.find(filter)
            .populate("cliente", "name email telefone foto")
            .populate("animal")
            .populate("servico")
            .populate("profissional", "name email especialidade telefone foto")
            .sort({ data_hora: 1 })
            .exec()
    }

    async cancel(id: string, user: { id: string; role: UserRole }): Promise<IAgendamento | null> {
        const filter = user.role === "admin" ? { _id: id, status: "scheduled" } : { _id: id, cliente: user.id, status: "scheduled" }
        return await Agendamento.findOneAndUpdate(filter, { status: "canceled" }, { new: true }).exec()
    }
}

export const agendamentoRepository = new MongooseAgendamentoRepository()
