const DepartmentValidationError = require("./DepartmentValidationError");

class DepartmentDoesntExistsError extends DepartmentValidationError {
    constructor() {
        super('This department doesnt exists!');
    }
}

module.exports = DepartmentDoesntExistsError;