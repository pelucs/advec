class User {
    constructor(builder) {
        this.id = builder.id;
        this.name = builder.name;
        this.email = builder.email;
        this.password = builder.password;
        this.type = builder.type;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
    getType() { return this.type; }

    setId(id) { this.id = id; }
    setName(name) { this.name = name; }
    setEmail(email) { this.email = email; }
    setPassword(password) { this.password = password; }
    setTypeAdmin() { this.type = 'admin'; }
    setTypeUser() { this.type = 'user'; }

    toPrisma() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            type: this.type
        }
    }
}

class UserBuilder {
    constructor() {
        this.id = "";
        this.name = "";
        this.email = "";
        this.password = "";
        this.type = "user";
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    setType(type) {
        this.type = type;
        return this;
    }

    build() { return new User(this); }
}

module.exports = { User, UserBuilder };