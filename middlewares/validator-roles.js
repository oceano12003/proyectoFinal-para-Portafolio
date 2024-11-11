const { request, response } = require("express");

const esAdmin = (req = request, res = response, next) => {
    const usuarioAutenticado = req.usuario;
    if(!usuarioAutenticado.estado){
        return res.status(401).json({msg: 'Estas de baja'});
    }
    if(usuarioAutenticado.rol != "ROLE_ADMIN"){
        return res.status(401).json({msg: 'Error, no eres administrador'});
    }
    next();
}

module.exports = {
    esAdmin
}