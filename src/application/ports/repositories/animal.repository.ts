import type { IAnimal, ICreateAnimalDTO, IUpdateAnimalDTO } from "../../../domain/entities/animal.entity.js"
import type { IBaseRepository } from "./base.repository.js"

export interface IAnimalRepository extends IBaseRepository<IAnimal, ICreateAnimalDTO, IUpdateAnimalDTO> {
    findByCliente(clienteId: string): Promise<IAnimal[]>
    findByIdAndCliente(id: string, clienteId: string): Promise<IAnimal | null>
}
