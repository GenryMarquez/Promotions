'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WinnersSchema extends Schema {
    up() {
        this.create('winners', (table) => {
            table.increments()
            table.integer('customer_id').unsigned().references('id').inTable('customers');
            table.string('policy_number', 80).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('winners')
    }
}

module.exports = WinnersSchema