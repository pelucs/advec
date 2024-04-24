const UserValidationError = require("./UserValidationError");

class UserJWTIsInvalidError extends UserValidationError {
    constructor() {
        super('User token is invalid.');
    }
}

module.exports = UserJWTIsInvalidError;