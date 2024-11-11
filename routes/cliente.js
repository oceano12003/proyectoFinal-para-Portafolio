const { Router } = require('express');
const { findAllClienteController, findByIdClienteController, createClienteController, updateClienteController, deleteByIdClienteController } = require('../controllers/cliente');
const { validatorToken } = require('../middlewares/validator-jwt');
const { esAdmin } = require('../middlewares/validator-roles');

const router = Router();

router.get('', findAllClienteController); // validar que este autenticado

router.get('/:id', findByIdClienteController); // validar que este autenticado, que sea user

router.post('', createClienteController); // validar que este autenticado, que sea developer

router.put('', updateClienteController); // validar que este autenticado, que sea admin

router.delete('/:id', [
    validatorToken,
    esAdmin,
] ,deleteByIdClienteController);

module.exports = router;