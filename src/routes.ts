import {  Router } from "express";

const routes = Router();

routes.get("/health", ( resquest, response) => {
   return response.status(200).json({
     message: "API Rodando OK!!"
   })
});

export default routes;