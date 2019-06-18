
var path = require("path");


module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/request", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/request.html"));
  });

  app.get("/donate", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/donate.html"));
  });

  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

};
