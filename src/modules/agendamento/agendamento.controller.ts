import type { Request, Response } from "express"
import agendamentoService from "./agendamento.service.js"

class AgendamentoController {

    async create(req: Request, res: Response): Promise<Response> {
        const { data_hora, status } = req.body ?? {}

        const agendamento = await agendamentoService.create({
            data_hora,
            status
        })

        return res.status(201).json(agendamento)
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        const agendamentos = await agendamentoService.getAll()

        return res.status(200).json(agendamentos)
    }

    async getById(req: Request, res: Response): Promise<Response> {
        const idParam = req.params.id

        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const agendamento = await agendamentoService.getById(idParam)

        return res.status(200).json(agendamento)
    }

    async update(req: Request, res: Response): Promise<Response> {
        const idParam = req.params.id

        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const { data_hora, status } = req.body ?? {}

        const agendamento = await agendamentoService.update(idParam, {
            data_hora,
            status
        })

        return res.status(200).json(agendamento)
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const idParam = req.params.id

        if (!idParam || Array.isArray(idParam)) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const agendamento = await agendamentoService.delete(idParam)

        return res.status(200).json(agendamento)
    }
}

export default new AgendamentoController()