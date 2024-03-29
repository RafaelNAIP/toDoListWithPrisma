import { PrismaClient } from '.prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()

const usersRouter = Router()

usersRouter.post("/", async (request, response) => {
    const { name, email }= request.body
    const user = await prisma.user.create({
        data: {
            name,
            email,
        }
        
    })
    response.json(user)
})

usersRouter.get("/", async (request, response) => {
    const allUsers = await prisma.user.findMany()
    
    response.json(allUsers)
})

export default usersRouter