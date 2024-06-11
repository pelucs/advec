const { Router } = require("express");
const user = require("./Domains/User/router");

const router = Router();

router.use("/user", user);

module.exports = router;