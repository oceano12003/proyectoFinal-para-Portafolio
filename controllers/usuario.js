const { request, response } = require("express");
const { createUsuario, updateUsuario } = require("../service/usuario");

const createUsuarioController = async (req = request, res = response) => {
    const { nombreUsuario, correo, clave, rol, estado } = req.body;
    const respuesta = await createUsuario(nombreUsuario, correo, clave, rol, estado);
    res.status(respuesta.status).json(respuesta);
}

const updateUsuarioController = async (req = request, res = response) => {
    console.log('Llegó al controlador');
    
    const { id, nombreUsuario, correo, clave, rol, estado } = req.body;
    const error = await updateUsuario(id, nombreUsuario, correo, clave, rol, estado);
    res.status(400).json(error);
}

module.exports = {
    createUsuarioController,
    updateUsuarioController
}