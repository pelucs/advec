const UserValidationError = require("./UserValidationError");

class UserAlreadyExistsError extends UserValidationError {
    constructor() {
        super('There is already an user registered with this email!.');
    }
}

module.exports = UserAlreadyExistsError;