import { Router } from "express"
import profissionalController from "./profissional.controller.js"
import { ensureAuthenticated, ensureRoles } from "../auth/auth.middlewares.js"

const profissionalRoutes = Router()

profissionalRoutes.get("/", ensureAuthenticated, profissionalController.getAll)
profissionalRoutes.post("/", ensureAuthenticated, ensureRoles(["admin"]), profissionalController.create)
profissionalRoutes.put("/me", ensureAuthenticated, ensureRoles(["profissional"]), profissionalController.update)
profissionalRoutes.get("/:id", ensureAuthenticated, profissionalController.getById)
profissionalRoutes.put("/:id", ensureAuthenticated, ensureRoles(["admin"]), profissionalController.update)
profissionalRoutes.delete("/:id", ensureAuthenticated, ensureRoles(["admin"]), profissionalController.delete)

export default profissionalRoutes
