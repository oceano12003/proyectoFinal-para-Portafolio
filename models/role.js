const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	role: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'roles',
    timestamps: false
});

module.exports = Role;