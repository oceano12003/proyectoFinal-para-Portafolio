const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");
const { generarJWT } = require('../helpers/generator-jwt');

const login = async (nombreUsuario, clave) => {

    try {
        // Usuario existe
        const usuario = await Usuario.findOne({ where: { nombreUsuario } });
        if (!usuario) {
            throw new Error('Error al autenticar - usuario no existe');
        }
        // Validar que esté activo
        if(!usuario.estado){
            throw new Error('Error al autenticar - inactivo');
        }
        // Clave corresponde
        const validaClave = bcryptjs.compareSync(clave, usuario.clave);
        if(!validaClave){
            throw new Error('Error al autenticar - clave');
        }
        // Construir el JWT
        const token = await generarJWT(usuario.id);
        return {
            msg: 'Usuario autenticado',
            datos: [],
            token
        }
    } catch (error) {
        console.log(error);
        return {
            msg: error.message,
            datos: []
        }
    }
}

module.exports = {
    login
}