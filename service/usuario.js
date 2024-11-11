const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");

const createUsuario = async (nombreUsuario, correo, clave, rol, estado) => {
    try {
        // encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        clave = bcryptjs.hashSync(clave, salt);

        // insertamos
        const usuario = await Usuario.create({
            nombreUsuario, correo, clave, rol, estado
        });
        return {
            msg: `El usuario con nombre de usuario ${nombreUsuario} se insertó correctamente`,
            status: 201,
            datos: []
        }
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const updateUsuario = async (id, nombreUsuario, correo, clave, rol, estado) => {
    try {
        // clave fuerte
        // clave debe ser nueva
        
        await Usuario.update({ nombreUsuario, correo, clave, rol, estado }, { where: { id } });
        
    } catch (error) {
        console.log(error);
        
        return error.message; 
    }
}

module.exports = {
    createUsuario,
    updateUsuario
}