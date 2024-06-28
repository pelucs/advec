const jwt = require("jsonwebtoken");
const userService = require("./service");
const { UserBuilder } = require("../../Entities/user");
const { JWTSECRET, tokenExpireTime } = require("../../Constants/tokenSecret");
const { v4 } = require("uuid");
const ValidationError = require("../../Exceptions/ValidationError");


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
            const { email }= request.body;

            const user = await userService.getUserByEmail(email);

            const token = jwt.sign({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                type: user.getType()
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
}

module.exports = UserController;