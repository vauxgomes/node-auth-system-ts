import { Request, Response } from 'express'
import { CreateUserService } from '../../services/users/CreateUserService'

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const user = await this.createUserService.execute({
      name,
      email,
      password
    })

    // Removendo a senha do objeto de retorno para segurança
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      created_at: user.created_at
    }

    return res.status(201).json(userResponse)
  }
}
