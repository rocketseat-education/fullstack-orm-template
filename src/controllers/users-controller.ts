import { NextFunction, Request, Response } from "express"

class UsersController {
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

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json()
    } catch (error) {
      next(error)
    }
  }
}

export { UsersController }
