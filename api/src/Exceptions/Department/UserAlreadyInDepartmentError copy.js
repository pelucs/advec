const DepartmentValidationError = require("./DepartmentValidationError");

class UserAlreadyInDepartmentError extends DepartmentValidationError {
    constructor() {
        super('This user is already linked to this department!');
    }
}

module.exports = UserAlreadyInDepartmentError;