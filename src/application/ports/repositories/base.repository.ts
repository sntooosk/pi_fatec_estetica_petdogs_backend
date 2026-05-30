export interface IBaseRepository<TEntity, TCreateDTO, TUpdateDTO> {
    create(data: TCreateDTO): Promise<TEntity>
    findAll(): Promise<TEntity[]>
    findById(id: string): Promise<TEntity | null>
    update(id: string, data: TUpdateDTO): Promise<TEntity | null>
    delete(id: string): Promise<TEntity | null>
}
