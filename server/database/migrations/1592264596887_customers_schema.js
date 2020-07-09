'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersSchema extends Schema {
    up() {
        this.create('customers', (table) => {
            table.increments()
            table.integer('user_id').unsigned().references('id').inTable('users')
            table.string('policy_number', 80).notNullable().unique()
            table.string('firs_name', 40).notNullable()
            table.string('last_name', 40).notNullable()
            table.string('phone_number', 10).notNullable().unique()
            table.string('email', 254).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('customers')
    }
}

module.exports = CustomersSchema