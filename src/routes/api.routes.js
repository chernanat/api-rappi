const { Router } = require("express");
const { accessToken } = require("../controller/api.controller");

const router = Router();

router.post("/token", accessToken);

module.exports = router;
