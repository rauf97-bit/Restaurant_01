let ranges = document.querySelector(".ranges");
let item = document.querySelector(".item-qty");

ranges.oninput = (e) => {
  item.textContent = ranges.value;
};
let rangey = document.querySelector(".rangey");
let itemy = document.querySelector(".item-qtys");

rangey.oninput = (e) => {
  itemy.textContent = rangey.value;
};
let rangez = document.querySelector(".rangez");
let itemz = document.querySelector(".item-qtyz");

rangez.oninput = (e) => {
  itemz.textContent = rangez.value;
};
