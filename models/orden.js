const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const DetalleOrden = require("./detalleOrden");

const Orden = sequelize.define('Orden', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaEmision: {
        type: DataTypes.DATE,
    },
    fechaEntrega: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'ordenes',
    timestamps: false,
    underscored: true
});

Orden.hasMany(DetalleOrden, {
    foreignKey: 'id_orden'
});
DetalleOrden.belongsTo(Orden, {
    foreignKey: {
        name: 'id_orden'
    }
});

// Relación de muchos es a muchos que dado este caso cambiaremos a uno es a muchos como en SQL
/* Orden.belongsToMany(Producto, {
    through: DetalleOrden,
    foreignKey: 'id_orden'
});
Producto.belongsToMany(Orden, {
    through: DetalleOrden,
    foreignKey: 'id_producto'
}); */

module.exports = Orden;