const UserValidationError = require("./UserValidationError");

class UserDoesntExistsError extends UserValidationError {
    constructor() {
        super('This user does not exists!.');
    }
}

module.exports = UserDoesntExistsError;