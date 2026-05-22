import { Router } from "express"
import agendamentoController from "./agendamento.controller.js"
import { ensureAuthenticated } from "../auth/auth.middlewares.js"

const agendamentoRoutes = Router()

agendamentoRoutes.use(ensureAuthenticated)
agendamentoRoutes.post("/", agendamentoController.create)
agendamentoRoutes.get("/", agendamentoController.getAll)
agendamentoRoutes.patch("/:id/cancel", agendamentoController.cancel)
agendamentoRoutes.delete("/:id", agendamentoController.cancel)

export default agendamentoRoutes
