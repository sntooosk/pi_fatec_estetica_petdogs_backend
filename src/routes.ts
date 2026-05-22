import { Router } from "express"
import agendamentoRoutes from "./modules/agendamento/agendamento.routes.js"
import animalRoutes from "./modules/animal/animal.routes.js"
import authRoutes from "./modules/auth/auth.routes.js"
import clienteRoutes from "./modules/cliente/cliente.routes.js"
import profissionalRoutes from "./modules/profissional/profissional.routes.js"
import servicoRoutes from "./modules/servico/servico.routes.js"

const routes = Router()

routes.get("/health", (request, response) => {
    return response.status(200).json({
        message: "API Rodando OK!!",
    })
})

routes.use("/auth", authRoutes)
routes.use("/clientes", clienteRoutes)
routes.use("/pets", animalRoutes)
routes.use("/animais", animalRoutes)
routes.use("/servicos", servicoRoutes)
routes.use("/agendamentos", agendamentoRoutes)
routes.use("/profissionais", profissionalRoutes)

export default routes
