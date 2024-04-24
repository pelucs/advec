const UserValidationError = require("./UserValidationError");

class UserPasswordIsIncorrectError extends UserValidationError {
    constructor() {
        super('User email and password does not match.');
    }
}

module.exports = UserPasswordIsIncorrectError;