import { Router } from "express"
import agendamentoRoutes from "./adapters/http/routes/agendamento.routes.js"
import animalRoutes from "./adapters/http/routes/animal.routes.js"
import authRoutes from "./adapters/http/routes/auth.routes.js"
import clienteRoutes from "./adapters/http/routes/cliente.routes.js"
import profissionalRoutes from "./adapters/http/routes/profissional.routes.js"
import relatorioRoutes from "./adapters/http/routes/relatorio.routes.js"
import servicoRoutes from "./adapters/http/routes/servico.routes.js"

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
routes.use("/relatorios", relatorioRoutes)

export default routes
