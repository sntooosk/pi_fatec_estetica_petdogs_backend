import {  Router } from "express"
import clienteController from "./cliente.controller.js"

const clienteRoutes = Router()

// Define your routes here, for example:
clienteRoutes.post('/', clienteController.create)
clienteRoutes.get('/', clienteController.getAll)
clienteRoutes.get('/:id', clienteController.getById)
clienteRoutes.put('/:id', clienteController.update)
clienteRoutes.delete('/:id', clienteController.delete)

export default clienteRoutes