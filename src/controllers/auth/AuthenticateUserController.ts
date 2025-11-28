import { Request, Response } from 'express'
import { AuthenticateUserService } from '../../services/auth/AuthenticateUserService'

export class AuthenticateUserController {
  constructor(private authenticateUserService: AuthenticateUserService) {}

  public handle = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body

    const { user, token } = await this.authenticateUserService.execute({
      email,
      password
    })

    return res.json({ user, token })
  }
}
