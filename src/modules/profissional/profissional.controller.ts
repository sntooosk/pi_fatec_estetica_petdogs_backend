import type { Request, Response } from "express"
import profissionalService from "./profissional.service.js"

class profissionalController {

    async create(req: Request, res: Response): Promise<Response> {
        const { name, especialidade, disponibilidade_inicio, disponibilidade_fim } = req.body ?? {}

        const profissional = await profissionalService.create({ name, especialidade, disponibilidade_inicio, disponibilidade_fim })

        return res.status(201).json(profissional)
    }

    async getAll(req: Request, res: Response) {
        const profissional = await profissionalService.getAll()

        return res.status(200).json(profissional)
    }

    async getById(req: Request, res: Response) {
        const id = req.params.id ?? ""

        const profissional = await profissionalService.getById(id)

        return res.status(200).json(profissional)
    }

    async update(req: Request, res: Response) {
        const id = req.params.id ?? ""

        const { name, especialidade, disponibilidade_inicio, disponibilidade_fim } = req.body ?? {}

        const profissional = await profissionalService.update(id, { name, especialidade, disponibilidade_inicio, disponibilidade_fim })

        return res.status(200).json(profissional)
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id ?? ""

        const profissional = await profissionalService.delete(id)

        return res.status(200).json(profissional)   
    }

}

export default new profissionalController()