const Role = require("../models/role");
const Usuario = require("../models/usuario");

const validarRolExiste = async (rol) => {
    const role = await Role.findOne({
        where: {
            role: rol
        }
    });
    if (!role) {
        throw new Error(`El rol ${rol} no existe`);
    }
}

const existeNombreUsuario = async (nombreUsuario) => {
    const existeNombreUsuario = await Usuario.findOne({ where: { nombreUsuario } });
    if (existeNombreUsuario) {
        throw new Error(`El usuario con nombre de usuario ${nombreUsuario} ya existe`);
    }
}

const existeCorreo = async (correo) => {
    const existeCorreo = await Usuario.findOne({ where: { correo } });
    if (existeCorreo) {
        throw new Error(`El correo ${correo} ya existe`);
    }
}

module.exports = {
    validarRolExiste,
    existeNombreUsuario,
    existeCorreo
};