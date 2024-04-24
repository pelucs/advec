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
}

module.exports = User;