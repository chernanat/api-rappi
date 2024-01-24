const Request = require("../models/Request");

const createRequest = async (req, res) => {
  try {
    const { url_solicitud, interlocutor_id, json_solicitud, json_respuesta, estado } = req.body;
    const newRequest = await Request.create({
      url_solicitud,
      interlocutor_id,
      json_solicitud,
      json_respuesta,
      estado
    });
    console.log(req.body);
    return res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const getRequests = async (req, res) => {
  try {
    const users = await Request.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const getRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await Request.findByPk(id);
    if (!request)
      return res.status(404).json({
        response: `${id} no encontrado!`,
      });
    return res.status(200).json({
      message: "ok",
      response: request,
    });
    console.log(request);
  } catch (error) {
    console.log(error);
  }
};

const setRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const {url_solicitud, interlocutor_id, json_solicitud, json_respuesta, estado} = req.body;
    const requestFound = await Request.findByPk(id);
    if (!requestFound)
      return res.status(404).json({
        message: "Request no encontada",
        status: 404,
      });
    console.log(requestFound);
    requestFound.url_solicitud = url_solicitud;
    requestFound.interlocutor_id = interlocutor_id;
    requestFound.json_solicitud = json_solicitud;
    requestFound.json_respuesta = json_respuesta;
    requestFound.estado = estado;

    await requestFound.save();
    return res.status(200).json({
      message: `Request ${requestFound.id} actualizado correctamente`,
      request: requestFound
    })

  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRequest, getRequests, getRequest, setRequest };
