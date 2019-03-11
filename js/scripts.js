var orderCost = 0;

// cost of shoes in USD. Must have two decimal points
var redShoeCost = 99.00;
var blackShoeCost = 79.00;
var whiteShoeCost = 69.00;
var greenShoeCost = 89.00;

$(document).ready(function() {
  $(".totalCost").html(orderCost);
  $("#redShoeCost").html(redShoeCost);
  $("#blackShoeCost").html(blackShoeCost);
  $("#whiteShoeCost").html(whiteShoeCost);
  $("#greenShoeCost").html(greenShoeCost);

  // select redShoe
  $("#redShoeRadio").click(function() {
    orderCost = redShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select blackShoe
  $("#blackShoeRadio").click(function() {
    orderCost = blackShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select whiteShoe
  $("#whiteShoeRadio").click(function() {
    orderCost = whiteShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select greeenShoe
  $("#greenShoeRadio").click(function() {
    orderCost = greenShoeCost;
    $(".totalCost").html(orderCost);
  });

  // select Quantity
  $("#selectShoe").submit(function(event) {
    event.preventDefault();
    var quantity = parseInt($("#quantity").val());
    orderCost = orderCost * quantity;
    $(".totalCost").html(orderCost);
    $("#orderDetails").slideDown();
  });

  // submit Order Details
  $("#orderDetails").submit(function(event) {
    event.preventDefault();
    $("#receiptName").html($("#fullName").val());
    $("#receiptAddress1").html($("#address1").val());
    $("#receiptAddress2").html($("#address2").val());
    $("#receiptCity").html($("#city").val() + ", ");
    $("#receiptState").html($("#state").val() + "  ");
    $("#receiptZipCode").html($("#zipCode").val());
    $("#receiptEmailAddress").html($("#emailAddress").val());
    $("#receiptShoeSize").html($("#shoeSize").val());
    $("#receiptTotal").html(orderCost);
    $("#receipt").fadeIn();
  });


});
