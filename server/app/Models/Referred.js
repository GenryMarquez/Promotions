'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Referred extends Model {
    customer() {
        return this.belongsTo('App/Models/Customer')
    }
}

module.exports = Referred