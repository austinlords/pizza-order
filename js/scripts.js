var orderCost = 0;

// cost of pizzas in USD. 
var personal = 6.00;
var medium = 10.00;
var large = 14.00;
var xlarge = 16.00;

$(function() {
  $('form').submit(function() {
    alert('form successfully submitted');
    event.preventDefault();
    $('#receipt').show();
  });
});
