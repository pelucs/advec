class User {
    constructor({name, email, password}) {
        this.id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = 'user';
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
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            password: this.getPassword(),
            type: this.getType()
        }
    }
}

class UserBuilder {
    constructor() {
        this.id = "";
        this.name = "";
        this.email = "";
        this.password = "";
        this.type = 'user';
    }

    id(id) {
        this.id = id;
        return this;
    }

    name(name) {
        this.name = name;
        return this;
    }

    email(email) {
        this.email = email;
        return this;
    }

    password(password) {
        this.password = password;
        return this;
    }

    type(type) {
        this.type = type;
        return this;
    }

    build() { return new User(this); }
}

module.exports = { User, UserBuilder };