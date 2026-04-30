import Animal from "./animal.model.js"
import type { ICreateAnimalDTO, IUpdateAnimalDTO } from "./animal.types.js"

class AnimalService {

    async create(data: ICreateAnimalDTO) {
        try {
            return await Animal.create({
                id_animal: data.id_animal,
                nome: data.nome,
                especie: data.especie,
                idade: data.idade,
                porte: data.porte
            })
        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {
            return await Animal.find()
        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {
            return await Animal.findById(id)
        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateAnimalDTO) {
        try {
            return await Animal.findByIdAndUpdate(id, {
                id_animal: data.id_animal,
                nome: data.nome,
                especie: data.especie,
                idade: data.idade,
                porte: data.porte
            }, { new: true })
        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {
            return await Animal.findByIdAndDelete(id)
        } catch (e) {
            console.log(e)
        }
    }

}

export default new AnimalService()