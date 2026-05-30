import type { IAnimal, ICreateAnimalDTO, IUpdateAnimalDTO } from "../../../../domain/entities/animal.entity.js"
import type { IAnimalRepository } from "../../../../application/ports/repositories/animal.repository.js"
import Animal from "../models/animal.model.js"
import { MongooseBaseRepository } from "./mongoose-base.repository.js"

class MongooseAnimalRepository extends MongooseBaseRepository<IAnimal, ICreateAnimalDTO, IUpdateAnimalDTO> implements IAnimalRepository {
    constructor() {
        super(Animal)
    }

    async findByCliente(clienteId: string): Promise<IAnimal[]> {
        return await Animal.find({ cliente: clienteId }).sort({ nome: 1 }).exec()
    }

    async findByIdAndCliente(id: string, clienteId: string): Promise<IAnimal | null> {
        return await Animal.findOne({ _id: id, cliente: clienteId }).exec()
    }
}

export const animalRepository = new MongooseAnimalRepository()
