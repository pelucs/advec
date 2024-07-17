const { Router } = require("express");
const authentication = require("../../Middlewares/authentication");
const Controller = require("./controller");


const router = Router();
const controller = new Controller();

router.post("/memberRequest", authentication.validateJWT, controller.createRequest);
router.get("/listRequests", authentication.validateJWT, controller.listDepartmentRequests);
router.post("/leader-accept", authentication.validateJWT, controller.leaderAcceptSolicitation);
router.delete("/leader-reject", authentication.validateJWT, controller.leaderRejectSolicitation);

module.exports = router;