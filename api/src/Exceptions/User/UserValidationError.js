const ValidationError = require("../ValidationError");

class UserValidationError extends ValidationError {
    constructor(message) {
        super(message);
    }
}

module.exports = UserValidationError;