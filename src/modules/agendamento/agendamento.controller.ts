import type { Response } from "express"
import agendamentoService from "./agendamento.service.js"
import type { AuthenticatedRequest } from "../../types/request.types.js"

class AgendamentoController {
    public async create(req: AuthenticatedRequest, res: Response): Promise<Response> {
        try {
            const { data_hora, dateTime, animal, animalId, pet, petId, servico, servicoId, service, serviceId, profissional, profissionalId, professional, professionalId } = req.body ?? {}
            const agendamento = await agendamentoService.create({
                data_hora: data_hora ?? dateTime,
                animal: animal ?? animalId ?? pet ?? petId,
                servico: servico ?? servicoId ?? service ?? serviceId,
                profissional: profissional ?? profissionalId ?? professional ?? professionalId,
                cliente: req.user?.id ?? "",
            })

            return res.status(201).json(agendamento)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao agendar serviço"
            return res.status(400).json({ message })
        }
    }

    public async getAll(req: AuthenticatedRequest, res: Response): Promise<Response> {
        const agendamentos = await agendamentoService.getAll({ id: req.user?.id ?? "", role: req.user?.role ?? "cliente" })

        return res.status(200).json(agendamentos)
    }

    public async cancel(req: AuthenticatedRequest, res: Response): Promise<Response> {
        try {
            const agendamento = await agendamentoService.cancel(String(req.params.id ?? ""), { id: req.user?.id ?? "", role: req.user?.role ?? "cliente" })

            return res.status(200).json(agendamento)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao cancelar agendamento"
            return res.status(400).json({ message })
        }
    }
}

export default new AgendamentoController()
