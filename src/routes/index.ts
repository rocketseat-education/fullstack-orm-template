import { Router } from "express"

import { usersRoutes } from "./users-routes"
import { questionsRoutes } from "./questions-routes"

const routes = Router()
routes.use("/questions", questionsRoutes)
routes.use("/users", usersRoutes)

export { routes }
