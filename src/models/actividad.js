const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('actividad', {
  
    nombreActividad: {
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