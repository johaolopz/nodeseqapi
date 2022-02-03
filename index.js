'use strict'
const app = require('./src/app')
require('dotenv').config()
const { conn } = require("./src/db.js");

//la sincronización de sequelize force:true es destructiva
//si las tablas creadas por los modelos exiten, las borra
//y vuelve a crearlas, obviamente los registros se pierden
//NO USARLA EN PRODUCCIÓN
conn.sync({ force: true }).then(async () => {
  app.listen(process.env.PORT, async () => {
    let url;
    process.env.NODE_ENV === "production"
      ? (url = process.env.BASE_URL)
      : (url = "http://localhost:3001");

    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});