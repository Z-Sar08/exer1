function displayProd() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

document.getElementById('prodButton').addEventListener("click", displayProd);


function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;
  document.getElementById("answera").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;
}

document.getElementById('diffButton').addEventListener("click", displayDiff);
