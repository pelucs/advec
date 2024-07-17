const UserAlreadyExistsError = require("../../Exceptions/User/UserAlreadyExistsError");
const UserDoesntExistsError = require("../../Exceptions/User/UserDoesntExistsError");
const PrismaUserRepository = require("../../Repositories/PrismaUserRepository");
const PrismaTokenBlackListRepository = require("../../Repositories/PrismaTokenBlackListRepository");
const PrismaDepartmentRepository = require("../../Repositories/PrismaDepartmentRepository");

class UserService {
    constructor() {
        this.userRepository = new PrismaUserRepository();
        this.tokenBlackList = new PrismaTokenBlackListRepository();
        this.departmentRepository = new PrismaDepartmentRepository();
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
        if (!user) throw new UserDoesntExistsError();
        return user;
    }

    async userAlreadyExists(email) {
        const existingUser = await this.userRepository.getByEmail(email);

        return Boolean(existingUser);
    }

    async saveTokenInBlackList(token) {
        return await this.tokenBlackList.set(token);
    }

    async findTokenInBlackList(token) {
        return await this.tokenBlackList.IsTokenInBlackList(token);
    }

    async getUserDepartments(userId) {
        return await this.departmentRepository.getUserDepartments(userId);
    }
}


module.exports = new UserService();