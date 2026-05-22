import authService from "../auth/auth.service.js"
import Cliente from "../cliente/cliente.model.js"
import Profissional from "./profissional.model.js"
import type { ICreateProfissionaleDTO, IUpdateProfissionalDTO } from "./profissional.types.js"

class ProfissionalService {
    private parseDate(value: Date | string, field: string): Date {
        const date = new Date(value)
        if (Number.isNaN(date.getTime())) throw new Error(`${field} inválida`)
        return date
    }

    async create(data: ICreateProfissionaleDTO) {
        const name = data.name?.trim()
        const email = data.email?.trim().toLowerCase()
        const senha = data.senha

        if (!name || !email || !senha || !data.especialidade?.trim() || !data.disponibilidade_inicio || !data.disponibilidade_fim) {
            throw new Error("Nome, e-mail, senha, especialidade e disponibilidade são obrigatórios")
        }

        authService.assertPassword(senha)

        const emailInUse = await Profissional.findOne({ email })
        const clientEmailInUse = await Cliente.findOne({ email })

        if (emailInUse || clientEmailInUse) {
            throw new Error("E-mail já cadastrado")
        }

        const payload: Record<string, string | Date> = {
            name,
            email,
            senha: await authService.hashPassword(senha),
            role: "profissional",
            especialidade: data.especialidade.trim(),
            disponibilidade_inicio: this.parseDate(data.disponibilidade_inicio, "Disponibilidade inicial"),
            disponibilidade_fim: this.parseDate(data.disponibilidade_fim, "Disponibilidade final"),
        }

        if (data.telefone?.trim()) payload.telefone = data.telefone.trim()
        if (data.foto?.trim()) payload.foto = data.foto.trim()

        return await Profissional.create(payload)
    }

    async getAll() {
        return await Profissional.find().sort({ name: 1 })
    }

    async getById(id: string) {
        return await Profissional.findById(id)
    }

    async update(id: string, data: IUpdateProfissionalDTO) {
        const payload: Record<string, unknown> = {}

        if (data.name !== undefined) payload.name = data.name.trim()
        if (data.email !== undefined) payload.email = data.email.trim().toLowerCase()
        if (data.telefone !== undefined) payload.telefone = data.telefone.trim()
        if (data.foto !== undefined) payload.foto = data.foto.trim()
        if (data.especialidade !== undefined) payload.especialidade = data.especialidade.trim()
        if (data.disponibilidade_inicio !== undefined) payload.disponibilidade_inicio = this.parseDate(data.disponibilidade_inicio, "Disponibilidade inicial")
        if (data.disponibilidade_fim !== undefined) payload.disponibilidade_fim = this.parseDate(data.disponibilidade_fim, "Disponibilidade final")
        if (data.senha !== undefined && data.senha.trim()) {
            authService.assertPassword(data.senha)
            payload.senha = await authService.hashPassword(data.senha)
        }

        return await Profissional.findByIdAndUpdate(id, payload, { new: true })
    }

    async delete(id: string) {
        return await Profissional.findByIdAndDelete(id)
    }
}

export default new ProfissionalService()
