let qty = document.querySelector(".qt");
let qty1 = document.querySelector(".qt1");
let qty2 = document.querySelector(".qt2");

let qty3 = document.querySelector(".qt3");
let qty4 = document.querySelector(".qt4");
let qty5 = document.querySelector(".qt5");
let qty6 = document.querySelector(".qt6");

let addQty = document.querySelector(".qt-plus");
let addQty1 = document.querySelector(".qt-plus1");
let addQty2 = document.querySelector(".qt-plus2");

let addQty3 = document.querySelector(".qt-plus3");
let addQty4 = document.querySelector(".qt-plus4");
let addQty5 = document.querySelector(".qt-plus5");
let addQty6 = document.querySelector(".qt-plus6");

let subQty = document.querySelector(".qt-minus");
let subQty1 = document.querySelector(".qt-minus1");
let subQty2 = document.querySelector(".qt-minus2");

let subQty3 = document.querySelector(".qt-minus3");
let subQty4 = document.querySelector(".qt-minus4");
let subQty5 = document.querySelector(".qt-minus5");
let subQty6 = document.querySelector(".qt-minus6");

let price = document.querySelector(".price1");
let price1 = document.querySelector(".price2");

let price2 = document.querySelector(".price3");
let price3 = document.querySelector(".price4");
let price4 = document.querySelector(".price5");
let price5 = document.querySelector(".price6");
let price6 = document.querySelector(".price7");
let total = document.querySelector(".total1");

function add(e) {
  let currentVal = new Number(qty.textContent);
  let x = currentVal + 1;
  qty.textContent = x;
  let cash = new Number(price.textContent);
  cash += 21;
  price.textContent = cash;
  totalCalc();
}

function add1(e) {
  let currentVal = new Number(qty1.textContent);
  let x = currentVal + 1;
  qty1.textContent = x;
  let cash = new Number(price1.textContent);
  cash += 30;
  price1.textContent = cash;
  totalCalc();
}

function add2(e) {
  let currentVal = new Number(qty2.textContent);
  let x = currentVal + 1;
  qty2.textContent = x;
  let cash = new Number(price2.textContent);
  cash += 55;
  price2.textContent = cash;
  totalCalc();
}

function add3(e) {
  let currentVal = new Number(qty3.textContent);
  let x = currentVal + 1;
  qty3.textContent = x;
  let cash = new Number(price3.textContent);
  cash += 15;
  price3.textContent = cash;
  totalCalc();
}

function add4(e) {
  let currentVal = new Number(qty4.textContent);
  let x = currentVal + 1;
  qty4.textContent = x;
  let cash = new Number(price4.textContent);
  cash += 25;
  price4.textContent = cash;
  totalCalc();
}

function add5(e) {
  let currentVal = new Number(qty5.textContent);
  let x = currentVal + 1;
  qty5.textContent = x;
  let cash = new Number(price5.textContent);
  cash += 43;
  price5.textContent = cash;
  totalCalc();
}

function add6(e) {
  let currentVal = new Number(qty6.textContent);
  let x = currentVal + 1;
  qty6.textContent = x;
  let cash = new Number(price6.textContent);
  cash += 35;
  price6.textContent = cash;
  totalCalc();
}

function substract(e) {
  let currentVal = new Number(qty.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty.textContent = x;
    let cash = new Number(price.textContent);
    cash -= 21;
    price.textContent = cash;
  } else {
    qty.textContent = 0;
    price.textContent = 0;
  }
  totalCalc();
}
function substract1(e) {
  let currentVal = new Number(qty1.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty1.textContent = x;
    let cash = new Number(price1.textContent);
    cash -= 30;
    price1.textContent = cash;
  } else {
    qty1.textContent = 0;
    price1.textContent = 0;
  }
  totalCalc();
}

function substract2(e) {
  let currentVal = new Number(qty2.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty2.textContent = x;
    let cash = new Number(price2.textContent);
    cash -= 55;
    price2.textContent = cash;
  } else {
    qty2.textContent = 0;
    price2.textContent = 0;
  }
  totalCalc();
}
function substract3(e) {
  let currentVal = new Number(qty3.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty3.textContent = x;
    let cash = new Number(price3.textContent);
    cash -= 15;
    price3.textContent = cash;
  } else {
    qty3.textContent = 0;
    price3.textContent = 0;
  }
  totalCalc();
}
function substract4(e) {
  let currentVal = new Number(qty4.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty4.textContent = x;
    let cash = new Number(price4.textContent);
    cash -= 25;
    price4.textContent = cash;
  } else {
    qty4.textContent = 0;
    price4.textContent = 0;
  }
  totalCalc();
}
function substract5(e) {
  let currentVal = new Number(qty5.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty5.textContent = x;
    let cash = new Number(price5.textContent);
    cash -= 43;
    price5.textContent = cash;
  } else {
    qty5.textContent = 0;
    price5.textContent = 0;
  }
  totalCalc();
}
function substract6(e) {
  let currentVal = new Number(qty6.textContent);
  let x = currentVal - 1;
  if (x > 0) {
    qty6.textContent = x;
    let cash = new Number(price6.textContent);
    cash -= 35;
    price6.textContent = cash;
  } else {
    qty6.textContent = 0;
    price6.textContent = 0;
  }
  totalCalc();
}

function totalCalc(e) {
  total.textContent =
    JSON.parse(price.textContent) +
    JSON.parse(price1.textContent) +
    JSON.parse(price2.textContent) +
    JSON.parse(price3.textContent) +
    JSON.parse(price4.textContent) +
    JSON.parse(price5.textContent) +
    JSON.parse(price6.textContent);
}

addQty.addEventListener("click", add);
addQty1.addEventListener("click", add1);
addQty2.addEventListener("click", add2);
addQty3.addEventListener("click", add3);
addQty4.addEventListener("click", add4);
addQty5.addEventListener("click", add5);
addQty6.addEventListener("click", add6);

subQty.addEventListener("click", substract);
subQty1.addEventListener("click", substract1);
subQty2.addEventListener("click", substract2);
subQty3.addEventListener("click", substract3);
subQty4.addEventListener("click", substract4);
subQty5.addEventListener("click", substract5);
subQty6.addEventListener("click", substract6);

console.log(qty);
console.log(addQty);
console.log(subQty);
