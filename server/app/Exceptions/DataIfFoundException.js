'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class DataIfFoundException extends LogicalException {
    /**
     * Handle this exception by itself
     */
    handle(error, { response }) {
        return response.status(200).json({
            error: 'There was already a winner.'
        })
    }
}

module.exports = DataIfFoundException