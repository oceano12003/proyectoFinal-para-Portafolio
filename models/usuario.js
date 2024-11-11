const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
	correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
	clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
	rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
	estado: {
        type: DataTypes.BOOLEAN
    },
}, {
    tableName: 'usuarios',
    timestamps: false,
    underscored: true
});

module.exports = Usuario;