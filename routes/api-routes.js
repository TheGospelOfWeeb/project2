var Shirts = require("../models/Shirts.js");
var Pants = require("../models/pants.js");
var Shoes = require("../models/shoes.js");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/inventory", function(req, res) {
    Shirts.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/inventory2", function(req, res) {
    Pants.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/inventory3", function(req, res) {
    Shoes.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // add
  app.post("/api/new", function(req, res) {
    console.log("Shirt Data:");
    console.log(req.body);
    let dbObj = obj[req.body.type]
    dbObj.create({
      id: req.body.id,
      BRAND: req.body.BRAND,
      SIZE: req.body.SIZE,
      COLOR: req.body.COLOR
    }).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/delete", function(req, res){
    let dbObj = obj[req.body.type]
    dbObj.destroy({
        where: {
            id: req.body.id,
          }
        }).then(() => {
            console.log("Done");
          });
  });
};

const obj = {
    "shirt": Shirts,
    "pants": Pants,
    "shoes": Shoes
}