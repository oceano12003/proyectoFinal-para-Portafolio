const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Orden = require("./orden");

const Empleado = sequelize.define('Empleado', {    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaIngreso: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'empleados',
    timestamps: false,
    underscored: true
});

Empleado.hasMany(Orden, {
    foreignKey: 'id_empleado'
});
Orden.belongsTo(Empleado, {
    foreignKey: {
        name: 'id_empleado'
    }
});

module.exports = Empleado;