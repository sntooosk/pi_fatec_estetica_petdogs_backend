import {  Router } from "express";
import clienteRoutes from "./modules/cliente/cliente.routes.js";
import servicoRoutes from "./modules/servico/servico.routes.js";

const routes = Router();

routes.get("/health", ( resquest, response) => {
   return response.status(200).json({
     message: "API Rodando OK!!"
   })
});

routes.use("/clientes", clienteRoutes)
routes.use("/servicos", servicoRoutes)

export default routes;