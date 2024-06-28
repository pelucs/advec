const DepartmentValidationError = require("./DepartmentValidationError");

class UserIsNotDepartmentLeaderError extends DepartmentValidationError {
    constructor() {
        super('This user is not the leader of this department!');
    }
}

module.exports = UserIsNotDepartmentLeaderError;