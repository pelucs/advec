const UserAlreadyExistsError = require("../../Exceptions/User/UserAlreadyExistsError");
const UserMemoryRepository = require("../../Repositories/userMemoryRepository");
const TokenBlackListRepository = require("../../Repositories/tokenBlackListRepository");

class UserService {
    constructor() {
        this.userRepository = new UserMemoryRepository();
        this.tokenBlackList = new TokenBlackListRepository();
    }

    async createUser(user) {
        if (await this.userAlreadyExists(user.getEmail())) throw new UserAlreadyExistsError();
        return await this.userRepository.set(user);
    }

    async getUserById(id) {
        return await this.userRepository.getById(id);
    }

    async getUserByEmail(email) {
        return await this.userRepository.getByEmail(email);
    }

    async userAlreadyExists(email) {
        const existingUser = await this.userRepository.getByEmail(email)

        return Boolean(existingUser);
    }

    async saveTokenInBlackList(token) {
        return await this.tokenBlackList.set(token);
    }

    async findTokenInBlackList(token) {
        return await this.tokenBlackList.IsTokenInBlackList(token);
    }
}


module.exports = new UserService();