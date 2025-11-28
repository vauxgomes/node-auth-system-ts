import { z } from 'zod'

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({ message: 'Email é obrigatório' })
      .min(1, 'Email não pode ser vazio')
      .email({ message: 'Formato de email inválido' })
      .trim(),

    password: z
      .string({ message: 'Senha é obrigatória' })
      .min(1, 'Senha não pode ser vazia')
  })
})
