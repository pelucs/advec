class DepartmentRequest {
    constructor(builder) {
        this.id = builder.id;
        this.departmentId = builder.departmentId;
        this.user = builder.user;
    }

    getId() { return this.id; }
    getDepartmentId() { return this.departmentId; }
    getUser() { return this.user; }
    getUserId() { return this.user; }
    getUserName() { return this.user.name; }
    getUserEmail() { return this.user.email; }

    toPrisma() {
        return {
            id: this.id,
            userId: this.userId,
            departmentId: this.departmentId
        }
    }
}

class DepartmentRequestBuilder {
    constructor() {
        this.id = "";
        this.userId = "";
        this.departmentId = "";
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setUserId(userId) {
        this.userId = userId;
        return this;
    }

    setDepartmentId(departmentId) {
        this.departmentId = departmentId;
        return this;
    }

    build() { return new DepartmentRequest(this); }
}

module.exports = { DepartmentRequest, DepartmentRequestBuilder };