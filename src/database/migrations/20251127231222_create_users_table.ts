import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    // ID Auto-incremento
    table.increments('id').primary()

    // Campos básicos
    table.string('name').notNullable()
    table.string('email').notNullable().unique() // Email único é crucial para login
    table.string('password').notNullable()

    // Enum: Status
    table
      .enum('status', ['active', 'inactive', 'pending'], {
        useNative: false,
        enumName: 'user_status_enum'
      })
      .defaultTo('pending')
      .notNullable()

    // Enum: Role
    table
      .enum('role', ['admin', 'user'], {
        useNative: false,
        enumName: 'user_role_enum'
      })
      .defaultTo('user')
      .notNullable()

    // Timestamps
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}
