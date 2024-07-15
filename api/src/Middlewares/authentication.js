const jwt = require("jsonwebtoken");
const userService = require("../Domains/User/service");
const UserPasswordIsIncorrectError = require("../Exceptions/User/UserPasswordIsIncorrectError");
const UserValidationError = require("../Exceptions/User/UserValidationError");
const UserJWTIsInvalidError = require("../Exceptions/User/UserJWTIsInvalidError");
const { JWTSECRET } = require("../Constants/tokenSecret");


async function validateUser(request, response, next) {
    try {
        const { email, password } = request.body;

        const user = await userService.getUserByEmail(email);

        if (!user || user.getPassword() !== password) {
            throw new UserPasswordIsIncorrectError();
        }
        next();
    } catch (error) {
        return error instanceof UserValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
    }
}

async function validateJWT(request, response, next) {
    try {
        const token = String(request.headers['x-access-token']);
        const tokenFromBlackList = await userService.findTokenInBlackList(token);

        if (tokenFromBlackList) {
            throw new UserJWTIsInvalidError();
        }
        
        jwt.verify(token, JWTSECRET, (error, decoded) => {
            if (error) throw new UserJWTIsInvalidError();

            request.userId = decoded.id;
            request.userName = decoded.name;
            request.email = decoded.email;
            request.authenticated = true;
            next();
        });
    } catch (error) {
        return error instanceof UserValidationError ?
            response.status(400).json({ error: error.message }) :
            response.status(500).json({ error });
    }
}

module.exports = {
    validateUser,
    validateJWT
}