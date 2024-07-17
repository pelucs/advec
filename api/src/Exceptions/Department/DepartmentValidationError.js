const ValidationError = require("../ValidationError");

class DepartmentValidationError extends ValidationError {
    constructor(message) {
        super(message);
    }
}

module.exports = DepartmentValidationError;