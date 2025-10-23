const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Something went wrong',
        explanation = 'Service layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR // ✅ make sure this param is named "statusCode"
    ) {
        super(message);
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode; // ✅ use the same variable name as the parameter
    }
}

module.exports = ServiceError;
