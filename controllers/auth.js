const { request, response } = require("express");
const { login } = require("../service/auth");

const loginController = async (req = request, res = response) => {
    const { nombreUsuario, clave } = req.body;
    const respuesta = await login(nombreUsuario, clave);
    res.status(200).json(respuesta);
}

module.exports = {
    loginController
}