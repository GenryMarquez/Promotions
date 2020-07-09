'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {

    user() {
        return this.belongsTo('App/Models/User')
    }
    referreds() {
        return this.hasMany('App/Models/Referred')
    }

    winner() {
        return this.hasOne('App/Models/Winner')
    }

}

module.exports = Customer