let num1;
let num2;
let result;

function plus() {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  result = num1 + num2;
  document.getElementById('out').innerHTML = result;
}
function minus() {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  result = num1 - num2;
  return (document.getElementById('out').innerHTML = result);
}
function multiplication() {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  result = num1 * num2;
  return (document.getElementById('out').innerHTML = result);
}
function division() {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  result = num1 / num2;
  return num2 === 0
    ? (document.getElementById('out').innerHTML = 'Деление на ноль невозможно!')
    : (document.getElementById('out').innerHTML = result);
}
function del() {
  const del1 = (document.getElementById('n1').value = '');
  const del2 = (document.getElementById('n2').value = '');
  const del3 = (document.getElementById('out').innerHTML = '');
  return del1, del2, del3;
}
