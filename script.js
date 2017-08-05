$(document).ready(function(){

  var firstNum = "";
  var secondNum = "";
  var result = "";
  var operator = "";
  var operatorCheck = false;

  $('.number').on("click", function() {
    if(operatorCheck === false){
      var number = $(this).attr('value');
      firstNum+= number;
      $('#first-number').text(firstNum);
    }
    else if(operatorCheck === true){
      var number = $(this).attr('value');
      secondNum+= number;
      console.log(secondNum);
      $('#second-number').text(secondNum);
    }
  });

  $('.operator').on("click", function(){
    operatorCheck = true;
    var operatorValue = $(this).attr('value');

    if(operatorValue === "minus"){
      operatorValue = "-";
    }

    else if(operatorValue === "plus"){
      operatorValue = "+";
    }

    else if(operatorValue === "times"){
      operatorValue = "*";
    }

    else if(operatorValue === "divide"){
      operatorValue = "/";
    }

    else if(operatorValue === "power"){
      operatorValue = "^";
    }

    operator += operatorValue;
    console.log(operator);
    $('#operator').text(operator);
  });

  $('.equal').on("click", function() {
    var number1 = parseInt(firstNum);
    var number2 = parseInt(secondNum);

    if(operator === "+"){
      result = number1 + number2;
      $('#result').text(result);
    }

    else if(operator === "-"){
      result = number1 - number2;
      $('#result').text(result);
    }

    else if(operator === "*"){
      result = number1 * number2;
      $('#result').text(result);
    }

    else if(operator === "/"){
        if(number2===0){
          $('#result').text("Why would you do this?");
        } else{
      result = number1 / number2;
      $('#result').text(result);
      }
    }

    else if(operator === "^"){
      result = (number1 * number1)
      $('#result').text(result);
    }

  });

  $('.clear').on("click", function(){
    operatorCheck = false;
    firstNum = "";
    secondNum = "";
    result = "";
    operator = "";
    $('#result').empty();
    $('#operator').empty();
    $('#first-number').empty();
    $('#second-number').empty();



  });




});
