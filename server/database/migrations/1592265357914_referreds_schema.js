'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReferredsSchema extends Schema {
    up() {
        this.create('referreds', (table) => {
            table.increments()
            table.integer('customer_id').unsigned().references('id').inTable('customers')
            table.string('firs_name', 40).notNullable()
            table.string('last_name', 40).notNullable()
            table.string('phone_number', 10).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('referreds')
    }
}

module.exports = ReferredsSchema