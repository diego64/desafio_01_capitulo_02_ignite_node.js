/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params

      const user = this.showUserProfileUseCase.execute({ user_id })

      if(!user) {
        throw new Error("User does not exists")
      }

      return response.json(user)
    } catch (error) {
        return response.status(404).json({ error: { message: error.message }})
    }
  }
}

export { ShowUserProfileController };
