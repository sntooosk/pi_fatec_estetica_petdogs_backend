export interface IAnimal {
    id_animal: number
    nome: string
    especie: string
    idade: number
    porte: string
    createdAt: string
    updatedAt?: string
}

export interface ICreateAnimalDTO {
    id_animal: number
    nome: string
    especie: string
    idade: number
    porte: string
}

export interface IUpdateAnimalDTO {
    id_animal?: number
    nome?: string
    especie?: string
    idade?: number
    porte?: string
}