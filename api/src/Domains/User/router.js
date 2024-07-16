const { Router } = require("express");
const Controller = require("./controller");
const authentication = require("../../Middlewares/authentication");

const router = Router();
const controller = new Controller();

router.post("/register", controller.create);
router.post("/login", authentication.validateUser, controller.login);
router.post("/logout", authentication.validateJWT, controller.logout);
router.get("/data", authentication.validateJWT, controller.getUserData);
router.put("/data", authentication.validateJWT, controller.updateUser);

module.exports = router;