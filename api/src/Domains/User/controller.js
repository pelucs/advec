const jwt = require("jsonwebtoken");
const userService = require("./service");
const { UserBuilder } = require("../../Entities/user");
const { JWTSECRET, tokenExpireTime } = require("../../Constants/tokenSecret");
const { v4 } = require("uuid");
const ValidationError = require("../../Exceptions/ValidationError");
const service = require("./service");


class UserController {
    
    create = async (request, response) => {
        try {
            const { name, email, password } = request.body;

            const user = new UserBuilder()
                .setId(v4())
                .setName(name)
                .setEmail(email)
                .setPassword(password)
                .build();

            const userResult = await userService.createUser(user);

            return response.status(201).json(userResult);
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }

    login = async (request, response) => {
        try {
            const { email } = request.body;

            const user = await userService.getUserByEmail(email);

            const token = jwt.sign({
                id: user.getId()
            }, JWTSECRET, { expiresIn: tokenExpireTime });

            return response.status(200).json({auth: true, token});
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }

    logout = async (request, response) => {
        try {
            const token = String(request.headers['x-access-token']);
            await userService.saveTokenInBlackList(token);
            return response.status(200).end();
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }

    getUserData = async (request, response) => {
        try {
            const id = request.userId;

            const user = await service.getUserById(id);
            const userDepartments = await userService.getUserDepartments(user.getId());
            user.departments = userDepartments;
            delete user["password"];

            return response.status(200).json(user);
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }

    updateUser = async (request, response) => {
        try {
            const id = request.userId;

            const { name, email, password } = request.body;
            
            const data = { name, email, password };

            const user = await service.updateUser(id, data);

            return response.status(200).json(user);
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }
}

module.exports = UserController;