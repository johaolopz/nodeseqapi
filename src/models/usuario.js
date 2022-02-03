const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('usuario', {
  
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
  );
};