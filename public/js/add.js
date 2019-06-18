
$("#donateShirt-btn").on("click", function(event) {
    event.preventDefault();
  
    var newShirt = {
      type: "shirt",
      BRAND: $("#brand_shirt").val().trim(),
      SIZE: $("#size_shirt").val().trim(),
      COLOR: $("#color_shirt").val().trim()
    };
  
    $.post("/api/new", newShirt)
      .then(function(data) {
        console.log(data);
      });
  
    $("#brand_shirt").val("");
    $("#size_shirt").val("");
    $("#color_shirt").val("");  
  });



$("#donatePants-btn").on("click", function(event) {
    event.preventDefault();
  
    var newPants = {
      type: "pants",
      BRAND: $("#brand_pants").val().trim(),
      SIZE: $("#size_pants").val().trim(),
      COLOR: $("#color_pants").val().trim()
    };
  
    $.post("/api/new", newPants)
      .then(function(data) {
        console.log(data);
      });
  
    $("#brand_pants").val("");
    $("#size_pants").val("");
    $("#color_pants").val("");  
  });

  $("#donateShoes-btn").on("click", function(event) {
    event.preventDefault();
  
    var newShoes = {
      type: "shoes",
      BRAND: $("#brand_shoes").val().trim(),
      SIZE: $("#size_shoes").val().trim(),
      COLOR: $("#color_shoes").val().trim()
    };
  
    $.post("/api/new", newShoes)
      .then(function(data) {
        console.log(data);
      });
  
    $("#brand_shoes").val("");
    $("#size_shoes").val("");
    $("#color_shoes").val("");  
  });