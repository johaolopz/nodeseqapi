const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('perfil', {
  
    nombrePerfil: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  { timestamps: false }
  );
};