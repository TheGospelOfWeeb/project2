// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var pants = sequelize.define("pants", {
  BRAND: Sequelize.STRING,
  COLOR: Sequelize.STRING,
  SIZE: Sequelize.STRING
});

// Syncs with DB
pants.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = pants;
