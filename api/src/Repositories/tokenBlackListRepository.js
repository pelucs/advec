class TokenBlackListRepository {
    constructor() {
        this.repository = [];
    }

    async set(token) {
        this.repository.push(token);
        return token;
    }

    async delete(token) {
        this.repository = this.repository.filter(item => item !== token);
    }

    async getAll() {
        return Promise.resolve(this.repository);
    }
    
    async IsTokenInBlackList(token) {
        return this.repository.includes(token);
    }
}

module.exports = TokenBlackListRepository;