import type { IAgendamento, ICreateAgendamentoDTO, IUpdateAgendamentoDTO } from "../../../domain/entities/agendamento.entity.js"
import type { UserRole } from "../../../domain/entities/auth.entity.js"
import type { IBaseRepository } from "./base.repository.js"

export interface IAgendamentoRepository extends IBaseRepository<IAgendamento, ICreateAgendamentoDTO, IUpdateAgendamentoDTO> {
    findScheduledByProfessionalOnDay(profissionalId: string, start: Date, end: Date, excludeId?: string): Promise<IAgendamento[]>
    findByUser(user: { id: string; role: UserRole }): Promise<IAgendamento[]>
    cancel(id: string, user: { id: string; role: UserRole }): Promise<IAgendamento | null>
}
