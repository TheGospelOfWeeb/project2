
$.get("/api/inventory", function(data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "shirt-well-" + i);
      $("#well-section").append(wellSection);
  
      $("#shirt-well-" + i).append("<h4>" + data[i].id + ". " + data[i].BRAND + "</h4>");
      $("#shirt-well-" + i).append("<h4>Size: " + data[i].SIZE + "</h4>");
      $("#shirt-well-" + i).append("<h4>Color: " + data[i].COLOR + "</h4>");
    }
  });
  
  
$.get("/api/inventory2", function(data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection2 = $("<div>");
      wellSection2.addClass("well");
      wellSection2.attr("id", "pants-well-" + i);
      $("#well-section2").append(wellSection2);
  
      $("#pants-well-" + i).append("<h4>" + data[i].id + ". " + data[i].BRAND + "</h4>");
      $("#pants-well-" + i).append("<h4>Size: " + data[i].SIZE + "</h4>");
      $("#pants-well-" + i).append("<h4>Color: " + data[i].COLOR + "</h4>");
    }
  });
  
  $.get("/api/inventory3", function(data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection3 = $("<div>");
      wellSection3.addClass("well");
      wellSection3.attr("id", "shoes-well-" + i);
      $("#well-section3").append(wellSection3);
  
      $("#shoes-well-" + i).append("<h4>" + data[i].id + ". " + data[i].BRAND + "</h4>");
      $("#shoes-well-" + i).append("<h4>Size: " + data[i].SIZE + "</h4>");
      $("#shoes-well-" + i).append("<h4>Color: " + data[i].COLOR + "</h4>");
    }
  });
  