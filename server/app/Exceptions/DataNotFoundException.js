'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class DataNotFoundException extends LogicalException {
    /**
     * Handle this exception by itself
     */
    handle(error, { response }) {
        return response.status(404).json({
            error: 'Data Not Found.'
        })
    }
}

module.exports = DataNotFoundException