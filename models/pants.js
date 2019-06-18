var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Pants = sequelize.define("pants", {
  BRAND: Sequelize.STRING,
  COLOR: Sequelize.STRING,
  SIZE: Sequelize.STRING
});

// Syncs with DB
Pants.sync();

module.exports = Pants;