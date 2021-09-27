import { Router } from "express";
import todoRouter from "./todos.route";
import usersRouter from "./users.route";

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/toDo', todoRouter)

export default routes