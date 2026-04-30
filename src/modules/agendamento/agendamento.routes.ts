import { Router } from "express"
import agendamentoController from "./agendamento.controller.js"

const agendamentoRoutes = Router()

agendamentoRoutes.post('/', agendamentoController.create)
agendamentoRoutes.get('/', agendamentoController.getAll)
agendamentoRoutes.get('/:id', agendamentoController.getById)
agendamentoRoutes.put('/:id', agendamentoController.update)
agendamentoRoutes.delete('/:id', agendamentoController.delete)

export default agendamentoRoutes