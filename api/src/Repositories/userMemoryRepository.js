class UserMemoryRepository {
    constructor() {
        this.lastId = 0;
        this.repository = {};
    }

    async set(user) {
        this.repository[this.lastId] = user;
        user.setId(this.lastId);
        this.lastId++;
        return user;
    }

    async delete(id) {
        delete this.repository[id];
    }

    async getByEmail(email) {
        for (const userId in this.repository) {
            const user = this.repository[userId];
            if (user.getEmail() === email) {
                return user;
            }
        }
        return null;
    }
    
    async getAll() {
        return Promise.resolve(this.repository);
    }
    
    async getById(id) {
        return this.repository[id];
    }
}

module.exports = UserMemoryRepository;