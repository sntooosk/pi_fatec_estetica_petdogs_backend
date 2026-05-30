import type { Model, UpdateQuery } from "mongoose"
import type { IBaseRepository } from "../../../../application/ports/repositories/base.repository.js"

export class MongooseBaseRepository<TEntity, TCreateDTO, TUpdateDTO> implements IBaseRepository<TEntity, TCreateDTO, TUpdateDTO> {
    constructor(protected readonly model: Model<TEntity>) {}

    async create(data: TCreateDTO): Promise<TEntity> {
        return await this.model.create(data as Partial<TEntity>)
    }

    async findAll(): Promise<TEntity[]> {
        return await this.model.find().exec()
    }

    async findById(id: string): Promise<TEntity | null> {
        return await this.model.findById(id).exec()
    }

    async update(id: string, data: TUpdateDTO): Promise<TEntity | null> {
        return await this.model.findByIdAndUpdate(id, data as UpdateQuery<TEntity>, { new: true }).exec()
    }

    async delete(id: string): Promise<TEntity | null> {
        return await this.model.findByIdAndDelete(id).exec()
    }
}
