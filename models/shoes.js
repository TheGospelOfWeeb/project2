var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Shoes = sequelize.define("shoes", {
  BRAND: Sequelize.STRING,
  COLOR: Sequelize.STRING,
  SIZE: Sequelize.STRING
});

// Syncs with DB
Shoes.sync();

module.exports = Shoes;