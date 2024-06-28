const { Router } = require("express");
const authentication = require("../../Middlewares/authentication");
const Controller = require("./controller");


const router = Router();
const controller = new Controller();

router.post("/memberRequest", authentication.validateJWT, controller.create);
router.get("/listRequests", authentication.validateJWT, controller.listDepartmentRequests);

module.exports = router;