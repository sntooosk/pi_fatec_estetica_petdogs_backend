import {  Router } from "express";
import clienteRoutes from "./modules/cliente/cliente.routes.js";

const routes = Router();

routes.get("/health", ( resquest, response) => {
   return response.status(200).json({
     message: "API Rodando OK!!"
   })
});

routes.use("/clientes", clienteRoutes)

export default routes;