import express  from "express";
import type{ Express } from  "express";
import cors from "cors";
import routes from "./routes.js";

class App {
    public server : Express;
    
    constructor(){
        this.server = express();
        this.midddlwares();
        this.routes();
    }
     private midddlwares() :void{
       this. server.use(cors());
       this.server.use(express.json({ limit: "10mb" }));
       this.server.use(express.urlencoded({ extended: true, limit: "10mb" }));
     }
     private routes(): void{
       this.server.use("/api/v1", routes);
     }
}

export default new App().server;