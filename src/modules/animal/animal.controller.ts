import type { Request, Response } from "express"
import animalService from "./animal.service.js"

class AnimalController {

    async create(req: Request, res: Response): Promise<Response> {
        const { id_animal, nome, especie, idade, porte } = req.body ?? {}

        const animal = await animalService.create({
            id_animal,
            nome,
            especie,
            idade,
            porte
        })

        return res.status(201).json(animal)
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        const animais = await animalService.getAll()

        return res.status(200).json(animais)
    }

    async getById(req: Request<{ id: string }>, res: Response): Promise<Response> {
        const id = req.params.id

        const animal = await animalService.getById(id)

        return res.status(200).json(animal)
    }

    async update(req: Request<{ id: string }>, res: Response): Promise<Response> {
        const id = req.params.id

        const { id_animal, nome, especie, idade, porte } = req.body ?? {}

        const animal = await animalService.update(id, {
            id_animal,
            nome,
            especie,
            idade,
            porte
        })

        return res.status(200).json(animal)
    }

    async delete(req: Request<{ id: string }>, res: Response): Promise<Response> {
        const id = req.params.id

        const animal = await animalService.delete(id)

        return res.status(200).json(animal)
    }

}

export default new AnimalController()