const { Router } = require("express");
const user = require("./Domains/User/router");
const department = require("./Domains/Department/router");

const router = Router();

router.use("/user", user);
router.use("/department", department);

module.exports = router;