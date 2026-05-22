import { Router } from "express"
import animalController from "./animal.controller.js"
import { ensureAuthenticated } from "../auth/auth.middlewares.js"

const animalRoutes = Router()

animalRoutes.use(ensureAuthenticated)
animalRoutes.post("/", animalController.create)
animalRoutes.get("/", animalController.getAll)
animalRoutes.get("/:id", animalController.getById)
animalRoutes.put("/:id", animalController.update)
animalRoutes.delete("/:id", animalController.delete)

export default animalRoutes
