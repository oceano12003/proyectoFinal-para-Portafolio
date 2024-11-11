const Cliente = require("../models/cliente");
const Orden = require("../models/orden");

const findAllClientes = async () => {
    try {
        const clientes = await Cliente.findAll({
            include: Orden
        });
        if (clientes.length == 0) {
            return {
                msg: 'La tabla clientes se encuentra sin datos',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Los datos de la tabla clientes son: ',
            status: 200,
            datos: clientes.map(cliente => cliente.toJSON())
        }
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const findByIdCliente = async (id) => {
    try {
        const cliente = await Cliente.findOne({
            where: {
                id
            },
            include: Orden
        });
        if (!cliente) {
            return {
                msg: `El cliente con id ${id} no existe`,
                status: 204,
                datos: []
            }
        }
        return {
            msg: `El cliente con  id ${id} es: `,
            status: 200,
            datos: cliente.toJSON()
        }
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const createCliente = async (rut, nombre, direccion, correo, telefono) => {
    try {
        const cliente = await Cliente.create({
            rut, nombre, direccion, correo, telefono
        });
        return {
            msg: 'Cliente insertado correctamente',
            status: 201,
            datos: cliente.toJSON()
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const updateCliente = async (id, rut, nombre, direccion, correo, telefono) => {
    try {
        const cliente = await Cliente.update({
            rut, nombre, direccion, correo, telefono
        }, {
            where: {
                id
            }
        });
        if (cliente == 0) {
            return {
                msg: 'Cliente no actualizado',
                status: 400,
                datos: []
            }
        }
        return {
            msg: 'Cliente actualizado correctamente',
            status: 200,
            datos: []
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const deleteById = async (id) => {
    try {
        const cliente = await Cliente.findOne({
            where: {
                id
            }
        });
        if (!cliente) {
            return {
                msg: `No se puede elimniar, Cliente con id ${id} no existe`,
                status: 400,
                datos: []
            }
        }
        const ordenes = await cliente.getOrdens();
        if (ordenes.length != 0) {
            return {
                msg: `No se puede elimniar, Cliente tiene órdenes asignadas`,
                status: 400,
                datos: []
            }
        }
        await Cliente.destroy({
            where: {
                id
            }
        });
        return {
            msg: `Cliente con id ${id} eliminado correctamente`,
            status: 200,
            datos: []
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

module.exports = {
    findAllClientes,
    findByIdCliente,
    createCliente,
    updateCliente,
    deleteById
};