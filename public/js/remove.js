$("#deleteShoes").on("click", function(event) {
    event.preventDefault();
  
    var notNewShoes = {
      type: "shoes",
      id: $("#id_shoes").val().trim(),
    };
  
    $.post("/api/delete", notNewShoes)
      .then(function(data) {
        console.log(data);
      });
  
    $("#id_shoes").val(""); 
  });

  $("#deleteShirt").on("click", function(event) {
    event.preventDefault();
  
    var notNewShirts = {
      type: "shirt",
      id: $("#id_shirt").val().trim(),
    };
  
    $.post("/api/delete", notNewShirts)
      .then(function(data) {
        console.log(data);
      });
  
    $("#id_shirt").val(""); 
  });

  $("#deletePants").on("click", function(event) {
    event.preventDefault();
  
    var notNewPants = {
      type: "pants",
      id: $("#id_pants").val().trim(),
    };
  
    $.post("/api/delete", notNewPants)
      .then(function(data) {
        console.log(data);
      });
  
    $("#id_pants").val(""); 
  });