const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const  DetalleOrden = sequelize.define('DetalleOrden', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'detalle_orden',
    timestamps: false
});

module.exports = DetalleOrden;