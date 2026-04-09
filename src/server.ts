import "dotenv/config";
import app from "./app.js";
import database from "./Config/database.js";

const PORT = process.env.PORT || 3000;

 async function startSever(): Promise<void>{
    await database.connect;

        app.listen(PORT , () =>{
    console.log(`Servidor Rodando no endereço: http://localhost:${PORT}`);
    });
 }

startSever();