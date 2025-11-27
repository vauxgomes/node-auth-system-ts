import knex from 'knex'
import config from '../config/database'

const environment = process.env.NODE_ENV || 'development'
const connectionConfig = config[environment]

if (!connectionConfig) {
  throw new Error(
    `Database configuration not found for environment: ${environment}`
  )
}
const db = knex(connectionConfig)
export { db }
