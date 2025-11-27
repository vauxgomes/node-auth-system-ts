// Note: process.cwd() pega a raiz do projeto onde o comando node/npm foi rodado

import type { Knex } from 'knex'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(process.cwd(), 'src', 'database', 'dev.sqlite3')
    },
    migrations: {
      directory: path.resolve(process.cwd(), 'src', 'database', 'migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.resolve(process.cwd(), 'src', 'database', 'seeds'),
      extension: 'ts'
    },
    pool: {
      afterCreate: (conn: any, cb: any) => {
        conn.run('PRAGMA foreign_keys = ON', cb)
      }
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: path.resolve(process.cwd(), 'src', 'database', 'migrations'),
      extension: 'js'
    },
    seeds: {
      directory: path.resolve(process.cwd(), 'src', 'database', 'seeds'),
      extension: 'js'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}

export default config
