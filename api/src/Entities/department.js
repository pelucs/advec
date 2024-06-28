class Department {
    constructor(builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.leaderId = builder.leaderId;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getLeaderId() { return this.leaderId; }
}

class DepartmentBuilder {
    constructor() {
        this.id = "";
        this.name = "";
        this.leaderId = "";
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setLeaderId(leaderId) {
        this.leaderId = leaderId;
        return this;
    }

    build() { return new Department(this); }
}

module.exports = { Department, DepartmentBuilder };