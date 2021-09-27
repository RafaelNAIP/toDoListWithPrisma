import { PrismaClient } from '.prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()

const todoRouter = Router()

todoRouter.post("/", async (request, response) => {
    const { toDoName, timeSpentOnToDo, userId } = request.body

    const toDo = await prisma.toDo.create({
        data: {
            toDoName,
            timeSpentOnToDo,
            userId
        }
    })
    response.json(toDo)
})

export default todoRouter