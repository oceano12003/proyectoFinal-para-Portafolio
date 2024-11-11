const { response, request } = require('express');
const { findAllClientes, findByIdCliente, createCliente, updateCliente, deleteById } = require('../service/cliente');

const findAllClienteController = async (req = request, res = response) => {
    const respuesta = await findAllClientes();
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const findByIdClienteController = async (req = request, res = response) => {
    const id = req.params.id;
    const respuesta = await findByIdCliente(id);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const createClienteController = async (req = request, res = response) => {
    const { rut, nombre, direccion, correo, telefono } = req.body;
    const respuesta = await createCliente(rut, nombre, direccion, correo, telefono);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const updateClienteController = async (req = request, res = response) => {
    const { id, rut, nombre, direccion, correo, telefono } = req.body;
    const respuesta = await updateCliente(id, rut, nombre, direccion, correo, telefono);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const deleteByIdClienteController = async (req = request, res = response) => {
    const id = req.params.id;
    const respuesta = await deleteById(id);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

module.exports = {
    findAllClienteController,
    findByIdClienteController,
    createClienteController,
    updateClienteController,
    deleteByIdClienteController
}