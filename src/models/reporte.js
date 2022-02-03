const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('reporte', {
  
    reporte: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    fechaInicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fechaFin: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
  },
  { timestamps: false }
  );
};