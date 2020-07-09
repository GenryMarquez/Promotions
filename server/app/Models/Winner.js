'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Winner extends Model {

    customer() {
        return this.belongsTo('App/Models/Customer')
    }
}

module.exports = Winner