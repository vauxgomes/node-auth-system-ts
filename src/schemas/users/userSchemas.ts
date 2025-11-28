import { z } from 'zod'

export const createUserSchema = z.object({
  body: z.object({
    name: z
      .string('Nome é obrigatório')
      .min(3, 'Nome deve ter pelo menos 3 caracteres'),

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
