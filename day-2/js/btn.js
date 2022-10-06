var add = document.getElementById('add');
var sub = document.getElementById('subtract');
var multi = document.getElementById('Multiply');
var div = document.getElementById('Divide');

var toggle = true;

add.addEventListener('click', () => {
  if (toggle) {
    console.log('I am true');
  } else {
    console.log('I am false');
  }

  toggle = !toggle;
});

sub.addEventListener('click', () => {
  var val1 = document.getElementById('firstNumber').value;
  var val2 = document.getElementById('secondNumber').value;
  var result = document.getElementById('result');
  var resultVal = parseInt(val1) - parseInt(val2);
  result.innerHTML =
    result.innerHTML +
    '<div style="background-color: red;">' +
    resultVal +
    '</div>';
});

multi.addEventListener('click', () => {
  var val1 = document.getElementById('firstNumber').value;
  var val2 = document.getElementById('secondNumber').value;
  var result = document.getElementById('result');
  result.innerText = parseInt(val1) * parseInt(val2);
});

div.addEventListener('click', () => {
  var val1 = document.getElementById('firstNumber').value;
  var val2 = document.getElementById('secondNumber').value;
  var result = document.getElementById('result');
  result.innerText = parseInt(val1) / parseInt(val2);
});
