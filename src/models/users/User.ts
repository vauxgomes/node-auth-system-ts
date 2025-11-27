export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending'
}

export interface User {
  id: number
  name: string
  email: string
  password: string // hashed password
  status: UserStatus
  role: UserRole
  created_at: Date
  updated_at: Date
}
