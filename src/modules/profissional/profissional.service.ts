import Profissional from './profissional.model.js';
import type { ICreateProfissionaleDTO, IUpdateProfissionalDTO } from './profissional.types.js';

class ProfissionalService {

    async create(data: ICreateProfissionaleDTO) {
        try {

            return await Profissional.create({
                name: data.name,
                especialidade: data.especialidade,
                disponibilidade_inicio: new Date(data.disponibilidade_inicio),
                disponibilidade_fim: new Date(data.disponibilidade_fim)
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {
            
            return await Profissional.find()

        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {
            
            return await Profissional.findById(id)

        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateProfissionalDTO) {
        try {

            return await Profissional.findByIdAndUpdate(id, {
                name: data.name,
                especialidade: data.especialidade,
                disponibilidade_inicio: data.disponibilidade_inicio ? new Date(data.disponibilidade_inicio) : undefined,
                disponibilidade_fim: data.disponibilidade_fim ? new Date(data.disponibilidade_fim) : undefined
            }, { new: true })

        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {
            
            return await Profissional.findByIdAndDelete(id)

        } catch (e) {
            console.log(e)
        }
    }

}

export default new ProfissionalService()