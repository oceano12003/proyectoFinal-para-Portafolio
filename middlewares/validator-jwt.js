const { request, response } = require("express");
const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuario");

const validatorToken = async (req = request, res = response, next) => {
    // validar que el token viene
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ msg: 'No me enviaste el token' });
    }
    // validar el token (que no ha expirado, que no ha sido manipulado)
    try {
        const { uid } = jwt.verify(token, process.env.SECRETKEY);
        const usuario = await Usuario.findOne({ where: { id: uid } });
        req.usuario = usuario.toJSON();
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: 'Token no válido' });
    }
}

module.exports = {
    validatorToken
}