/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers

      if(Array.isArray(user_id)) {
        throw new Error("User id it connot be an array!")
      }

      const users = this.listAllUsersUseCase.execute({ user_id })

      return response.json(users)
    } catch (error) {
        return response.status(400).json({ error: { message: error.message }})
    }
  }
}

export { ListAllUsersController };