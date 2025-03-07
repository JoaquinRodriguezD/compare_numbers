function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let num3 = parseFloat(document.getElementById("num3").value);

  let max_result = Math.max(num1, num2, num3);
  let min_result = Math.min(num1, num2, num3);
  let mid_result;

  if (num1 !== max_result && num1 !== min_result) {
    mid_result = num1;
  } else if (num2 !== max_result && num2 !== min_result) {
    mid_result = num2;
  } else {
    mid_result = num3;
  }

  const result = document.createElement("h3");
  result.innerHTML =
    "El número mayor es: " +
    max_result +
    "<br>El número menor es: " +
    min_result +
    "<br>El número en medio es: " +
    mid_result;
  document.body.appendChild(result);
}
