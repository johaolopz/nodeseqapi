const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('ordenTrabajo', {
  
    codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  { timestamps: false }
  );
};