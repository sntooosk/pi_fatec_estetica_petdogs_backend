import type { Request , Response} from"express";
import servicoService from "./servico.service.js";
/*
 lidar com HTTP
 Receber request 
 Devolver response
*/

class CategoryController {

    public async create( request:Request, response: Response): Promise<Response>{
       // const name = request.body.name?? null;
        const {id,name, duracao_min,preco} = request.body ?? {};

        const category = await servicoService.create({
            name: request.body.name,
            duracao_min: request.body.duracao_min,
            preco: request.body.preco
        });
        
        return response.status(201).json(category);
    }
    public async findAll( request:Request, response: Response):Promise<Response>{
       const categories = await servicoService.findAll();

       return response.status(200).json(categories);
   
    }

    public async delete(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;

        if(!id || typeof id!== "string"){
            return response.status(400).json({
                message :"id invalido",
            });
        }

        await servicoService.delete(id);
        return response.status(200).json({
            message:"cadastrado com sucesso!",
        });
    }
    public async findById(request:Request, response: Response):Promise<Response>{
        const {id} = request.params;

        if(!id || typeof id!== "string"){
            return response.status(400).json({
                message :"id invalido",
            });
        }

        const  category = await servicoService.findById(id);

        return response.status(200).json(category);
    }

    public async update( request:Request, response: Response):Promise<Response>{
       const {id} = request.params;
       const {name, description, active} = request.body;
       const teste = request.query.teste ?? "Não foi enviado";

       console.log("valor  de teste", teste);

       if(id || typeof id !== "string"){
        return response.status(400).json({
           message: "Id invalido"
        });
       }
       const category = await servicoService.update(id, {
        id: request.body.id,
        name: request.body.name,
        duracao_min: request.body.duracao_min,
        preco: request.body.preco
       });

       return response.status(200).json(category);
   
    }

}
export default new CategoryController();