import type { Request, Response } from "express"
import clienteService from "./cliente.service.js"

class ClienteController {

    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, telefone, senha } = req.body ?? {}

        const cliente = await clienteService.create({ name, email, telefone, senha })

        return res.status(201).json(cliente)
    }

    async getAll(req: Request, res: Response) {
        const clientes = await clienteService.getAll()

        return res.status(200).json(clientes)
    }

    async getById(req: Request, res: Response) {
        const id = req.params.id ?? ""

        const cliente = await clienteService.getById(id)

        return res.status(200).json(cliente)
    }

    async update(req: Request, res: Response) {
        const id = req.params.id ?? ""

        const { name, email, telefone, senha } = req.body ?? {}

        const cliente = await clienteService.update(id, { name, email, telefone, senha })

        return res.status(200).json(cliente)
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id ?? ""

        const cliente = await clienteService.delete(id)

        return res.status(200).json(cliente)   
    }

}

export default new ClienteController()