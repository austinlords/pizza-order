// back-end logic

function getValues() {
  var meats = [];
  var veggies = [];
  var size = $('input[name=selectSize]:checked').val();
  $('.meat:checked').each(function(m) {
    meats[m] = $(this).val();
  });
  $('.veggie:checked').each(function(v) {
    veggies[v] = $(this).val();
  });
  var cheese = $('input[name=cheeseRadio]:checked').val();
  var crust = $('input[name=crustRadio]:checked').val();
  var sauce = $('input[name=sauceRadio]:checked').val();
  
  var values = [size, meats, veggies, cheese, crust, sauce];
  return values;
};

function calculateMeatVeggie(array) {
  if (array.length === 0) {
    return 0;
  } else {
    var cost = array.length -1;
    return cost;
  }
};

function calculateCheese() {
  if ($('input[name=cheeseRadio]:checked').val() === 'Extra Cheese') {
    var cost = 3;
    return cost;
  } else return 0;
};

function calculateCrust() {
  if ($('input[name=crustRadio]:checked').val() === 'Cheese Stuffed Crust') {
    var cost = 3;
    return cost;
  } else return 0;
};

function calculateSize(size) {
  if (size === "Personal") {
    return 6;
  } else if (size === "Medium") {
    return 10;
  } else if (size === "Large") {
    return 14;
  } else if (size === "X-Large") {
    return 16;
  }
};

function concat(toppings, cost) {
  if (cost === 0) {
    return "NONE";
  } else if (cost >= 1) {
    var oneWord = toppings.join(", ");
  return oneWord;
  }
};

//front-end logic
$(function() {

  //calculate receipt on submit
  $('form').submit(function() {
    event.preventDefault();
    var valuesArray = getValues();
    var size = valuesArray[0];
    var meats = valuesArray[1];
    var veggies = valuesArray[2];
    var cheese = valuesArray[3];
    var crust = valuesArray[4];
    var sauce = valuesArray[5];
    var sizeCost = calculateSize(size);
    var meatCost = calculateMeatVeggie(meats);
    var veggieCost = calculateMeatVeggie(veggies);
    var cheeseCost = calculateCheese();
    var crustCost = calculateCrust();
    var sauceCost = 0;
    var totalCost = sizeCost + meatCost + veggieCost + sauceCost + cheeseCost + crustCost;

    meats = concat(meats, meatCost);
    veggies = concat(veggies, veggieCost);

    $('#sizeSelection').html(size);
    $('#sizeCost').html(sizeCost);
    $('#crustSelection').html(crust);
    $('#crustCost').html(crustCost);
    $('#cheeseSelection').html(cheese);
    $('#cheeseCost').html(cheeseCost);
    $('#sauceSelection').html(sauce);
    $('#sauceCost').html(sauceCost);
    $('#meatSelection').html(meats);
    $('#meatCost').html(meatCost);
    $('#veggieSelection').html(veggies);
    $('#veggieCost').html(veggieCost);
    $('#totalCost').html(totalCost);

    $('#receipt').slideToggle(800);

    $('form').slideToggle(800);
    $('#orderAgain').show();
  });

  //clear form and order again!
  $('#orderAgain').click(function() {
    event.preventDefault;
    $('form').trigger('reset');
    $('form').slideToggle(800);
    $('#receipt').slideToggle(800);
    $('#orderAgain').hide();
  });
  
});
