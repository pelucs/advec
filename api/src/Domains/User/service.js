const UserAlreadyExistsError = require("../../Exceptions/User/UserAlreadyExistsError");
const UserDoesntExistsError = require("../../Exceptions/User/UserDoesntExistsError");
const PrismaUserRepository = require("../../Repositories/PrismaUserRepository");
const PrismaTokenBlackListRepository = require("../../Repositories/PrismaTokenBlackListRepository");
const PrismaDepartmentRepository = require("../../Repositories/PrismaDepartmentRepository");
const bcrypt = require("bcrypt");
const UserPasswordIsIncorrectError = require("../../Exceptions/User/UserPasswordIsIncorrectError");

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

    async updateUser(id, data) {
        return await this.userRepository.update(id, data);
    }

    async generateHashedPassword(password) {
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async checkUserPassword(password, passwordFromDB) {
        const match = await bcrypt.compare(password, passwordFromDB);
        if (!match) throw new UserPasswordIsIncorrectError();
    }
}


module.exports = new UserService();