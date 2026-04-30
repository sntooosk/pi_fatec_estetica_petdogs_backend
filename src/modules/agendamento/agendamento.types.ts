export interface IAgendamento {
    data_hora: Date
    status: string
    createdAt: string
    updatedAt?: string
}

export interface ICreateAgendamentoDTO {
    data_hora: Date
    status: string
}

export interface IUpdateAgendamentoDTO {
    data_hora?: Date
    status?: string
}