import Agendamento from "./agendamento.model.js"
import Animal from "../animal/animal.model.js"
import Profissional from "../profissional/profissional.model.js"
import Servico from "../servico/servico.model.js"
import type { UserRole } from "../auth/auth.types.js"
import type { ICreateAgendamentoDTO } from "./agendamento.types.js"

class AgendamentoService {
    private parseDate(value: Date | string): Date {
        const date = new Date(value)

        if (Number.isNaN(date.getTime())) {
            throw new Error("Data e hora inválidas")
        }

        return date
    }

    public async create(data: ICreateAgendamentoDTO) {
        if (!data.animal || !data.servico || !data.profissional || !data.data_hora || !data.cliente) {
            throw new Error("Pet, serviço, profissional, data e hora são obrigatórios")
        }

        const dataHora = this.parseDate(data.data_hora)

        const animal = await Animal.findOne({ _id: data.animal, cliente: data.cliente })

        if (!animal) {
            throw new Error("Pet não encontrado para o usuário autenticado")
        }

        const servico = await Servico.findById(data.servico)

        if (!servico) {
            throw new Error("Serviço não encontrado")
        }

        const profissional = await Profissional.findById(data.profissional)

        if (!profissional) {
            throw new Error("Profissional não encontrado")
        }

        const unavailable = await Agendamento.findOne({
            data_hora: dataHora,
            profissional: data.profissional,
            status: "scheduled",
        })

        if (unavailable) {
            throw new Error("Horário indisponível para este profissional")
        }

        return await Agendamento.create({
            data_hora: dataHora,
            status: "scheduled",
            cliente: data.cliente,
            animal: data.animal,
            servico: data.servico,
            profissional: data.profissional,
        })
    }

    public async getAll(user: { id: string; role: UserRole }) {
        const filter = user.role === "admin" ? {} : user.role === "profissional" ? { profissional: user.id } : { cliente: user.id }

        return await Agendamento.find(filter)
            .populate("cliente", "name email telefone foto")
            .populate("animal")
            .populate("servico")
            .populate("profissional", "name email especialidade telefone foto")
            .sort({ data_hora: 1 })
    }

    public async cancel(id: string, user: { id: string; role: UserRole }) {
        const filter = user.role === "admin" ? { _id: id, status: "scheduled" } : { _id: id, cliente: user.id, status: "scheduled" }
        const agendamento = await Agendamento.findOneAndUpdate(filter, { status: "canceled" }, { new: true })

        if (!agendamento) {
            throw new Error("Agendamento não encontrado")
        }

        return agendamento
    }
}

export default new AgendamentoService()
