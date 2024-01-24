const { Router } = require("express");
const { createRequest, getRequests, getRequest, setRequest} = require("../controller/request.controller");

const router = Router();

//crear request
router.post("/request", createRequest);

//obtener requests
router.get("/requests", getRequests);

//obtener request por id
router.get('/request/:id', getRequest);

//modificar un request
router.put('/request/:id', setRequest);

module.exports = router;
