import { NextFunction, Request, Response } from "express"

class QuestionsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json()
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      return response.status(201).json()
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json()
    } catch (error) {
      next(error)
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json()
    } catch (error) {
      next(error)
    }
  }
}

export { QuestionsController }
