const UserAlreadyExistsError = require("../../Exceptions/User/UserAlreadyExistsError");
const UserMemoryRepository = require("../../Repositories/userMemoryRepository");
const TokenBlackListRepository = require("../../Repositories/tokenBlackListRepository");
const UserDoesntExistsError = require("../../Exceptions/User/UserDoesntExistsError");
const PrismaUserRepository = require("../../Repositories/PrismaUserRepository");
const PrismaTokenBlackListRepository = require("../../Repositories/PrismaTokenBlackListRepository");

class UserService {
    constructor() {
        this.userRepository = new PrismaUserRepository();
        this.tokenBlackList = new PrismaTokenBlackListRepository();
    }

    async createUser(user) {
        if (await this.userAlreadyExists(user.getEmail())) throw new UserAlreadyExistsError();
        return await this.userRepository.set(user);
    }

    async getUserById(id) {
        return await this.userRepository.getById(id);
    }

    async getUserByEmail(email) {
        const user = await this.userRepository.getByEmail(email);
        console.log("user no service", user);
        if (!user) throw new UserDoesntExistsError();
        return user;
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