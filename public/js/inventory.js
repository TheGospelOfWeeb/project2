// Loads javascript after html
$(document).ready(function () {
    // Populates the inventory for donations shown in the database
    //Get reference name of the container and the body
    // var shirtList = $("#shirts");
    // var pantsList = $("#pants");
    // var shoeList = $("#shoes");

    $.get("/api/tShirts", function (data) {
        console.log(data);
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {
                $("#shirts tbody").append("<tr><td></td><td>" + data.BRAND + "</td><td>" + data.COLOR + "</td><td>" + data.SIZE + "</td></tr>");
            }
        }
    });

    $.get("/api/pants", function (data) {
        console.log(data);
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {
                $("#pants tbody").append("<tr><td></td><td>" + data.BRAND + "</td><td>" + data.COLOR + "</td><td>" + data.SIZE + "</td></tr>");
            }
        }
    });

    $.get("/api/shoes", function (data) {
        console.log(data);
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {
                $("#shoes tbody").append("<tr><td></td><td>" + data.BRAND + "</td><td>" + data.COLOR + "</td><td>" + data.SIZE + "</td></tr>");
            }
        }
    });



});
