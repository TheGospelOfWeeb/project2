// Loads javascript after html
$(document).ready(function () {
// Populates the inventory for donations shown in the database
//Get reference name of the container and the body
var shirtList = $("#shirts");
var pantsList = $("#pants");
var shoeList = $("#shoes");

$.get("/api", function(data){
console.log(data);

$(shirtList).append("<tr><td>")
    



})



});
