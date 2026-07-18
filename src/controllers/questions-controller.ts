import { prisma } from "../prisma"
import { Request, Response } from "express"

class QuestionsController {
  async index(request: Request, response: Response) {
    const questions = await prisma.question.findMany()

    return response.json(questions)
  }

  async create(request: Request, response: Response) {
    const { title, content, userId } = request.body

    await prisma.question.create({
      data: {
        title,
        content,
        userId
      }
    })
    return response.status(201).json({ message: "Question created successfully" })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params

    try {
      await prisma.question.update({
        where: {
          id
        },
        data: request.body
      })
    } catch {
      return response.status(400).json({ message: "Question not found" })
    }
    return response.status(201).json({ message: "Question updated successfully" })
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    try {
      await prisma.question.delete({
        where: {
          id
        }
      })
    } catch (error) {
      return response.status(400).json({ message: "Question not found" })
    }

    return response.status(200).json({ message: "Question deleted successfully" })
  }
}

export { QuestionsController }