import Agendamento from './agendamento.model.js'
import type { ICreateAgendamentoDTO, IUpdateAgendamentoDTO } from './agendamento.types.js'

class AgendamentoService {

    async create(data: ICreateAgendamentoDTO) {
        try {

            return await Agendamento.create({
                data_hora: data.data_hora,
                status: data.status
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {

            return await Agendamento.find()

        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {

            return await Agendamento.findById(id)

        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateAgendamentoDTO) {
        try {

            return await Agendamento.findByIdAndUpdate(
                id,
                {
                    data_hora: data.data_hora,
                    status: data.status
                },
                { new: true }
            )

        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {

            return await Agendamento.findByIdAndDelete(id)

        } catch (e) {
            console.log(e)
        }
    }
}

export default new AgendamentoService()