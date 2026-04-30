export interface IServico {
    id: number;
    name: string;
    duracao_min: number;
    preco: number;
}

export interface ICreateServicoDTO{
    name: string;
    duracao_min: number;
    preco: number;
}

export interface IUpdateServicoDTO{
    id: number;
    name?: string;
    duracao_min?: number;
    preco?: number;
}