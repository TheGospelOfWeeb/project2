var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Shirts = sequelize.define("shirts", {
  BRAND: Sequelize.STRING,
  SIZE: Sequelize.STRING,
  COLOR: Sequelize.STRING
});

// Syncs with DB
Shirts.sync();

module.exports = Shirts;