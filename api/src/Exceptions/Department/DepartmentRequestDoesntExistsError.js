const DepartmentValidationError = require("./DepartmentValidationError");

class DepartmentRequestDoesntExistsError extends DepartmentValidationError {
    constructor() {
        super('There is no request from this user to this department!');
    }
}

module.exports = DepartmentRequestDoesntExistsError;