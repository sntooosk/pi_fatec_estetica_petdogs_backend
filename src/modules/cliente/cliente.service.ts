import Cliente from './cliente.model.js';
import type { ICreateClienteDTO, IUpdateClienteDTO } from './cliente.types.js';

class ClienteService {

    async create(data: ICreateClienteDTO) {
        try {

            return await Cliente.create({
                name: data.name,
                email: data.email,
                telefone: data.telefone,
                senha: data.senha
            })

        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {
            
            return await Cliente.find()

        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        try {
            
            return await Cliente.findById(id)

        } catch (e) {
            console.log(e)
        }
    }

    async update(id: string, data: IUpdateClienteDTO) {
        try {

            return await Cliente.findByIdAndUpdate(id, {
                name: data.name,
                email: data.email,
                telefone: data.telefone,
                senha: data.senha
            }, { new: true })

        } catch (e) {
            console.log(e)
        }
    }

    async delete(id: string) {
        try {
            
            return await Cliente.findByIdAndDelete(id)

        } catch (e) {
            console.log(e)
        }
    }

}

export default new ClienteService()