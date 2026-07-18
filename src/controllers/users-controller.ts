import { Request, Response } from "express"
import { prisma } from "../prisma"

class UsersController {
  async index(request: Request, response: Response) {
    const users = await prisma.user.findMany()

    return response.json(users)
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body

    try {
      await prisma.user.create({
        data: {
          name,
          email
        }
      })
    } catch {
      return response.status(400).json({ message: "User already exists" })
    }
    return response.status(201).json({ message: "User created successfully" })
  }

  async show(request: Request, response: Response) {

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: request.params.id
        }
      })
      return response.status(200).json(user)
    } catch (error) {
      return response.status(400).json({ message: "User not found" })
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params

    try {
      await prisma.user.update({
        where: {
          id
        },
        data: request.body
      })
    } catch (error) {
      return response.status(400).json({ message: "User not found" })
    }
    return response.status(200).json({ message: "User updated successfully" })
  }

    async delete(request: Request, response: Response) {
    const { id } = request.params

    try {
      await prisma.user.delete({
        where: {
          id
        }
      })
    } catch (error) {
      return response.status(400).json({ message: "User not found" })
    }

    return response.status(200).json({ message: "User deleted successfully" })
  }
}

export { UsersController }