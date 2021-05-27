let stake = document.getElementById("stake");
let sushi = document.getElementById("sushi");
let burger = document.getElementById("burger");
let itemx = document.querySelector(".itemx");
function generateStake(e) {
  let stakeDiv = document.createElement("div");
  stakeDiv.setAttribute("class", "itemz");
  let image = document.createElement("img");
  image.src = "/img/hanxiao-zzxqoEa64_0-unsplash.jpg";
  image.style.height = "60px";
  stakeDiv.appendChild(image);
  let text = document.createElement("p");
  text.textContent = "Stake";
  stakeDiv.appendChild(text);
  let price = document.createElement("h3");
  price.textContent = "$15.00";
  stakeDiv.appendChild(price);
  let cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.setAttribute("class", "btn-main");
  cancel.addEventListener(
    "click",
    (removediv = () => {
      stakeDiv.remove();
    })
  );
  stakeDiv.appendChild(cancel);
  itemx.appendChild(stakeDiv);
}
function generateSushi(e) {
  let sushiDiv = document.createElement("div");
  sushiDiv.setAttribute("class", "itemz");
  let image = document.createElement("img");
  image.src = "/img/ruyan-ayten-gUFI8SxNvxo-unsplash.jpg";
  image.style.height = "60px";
  sushiDiv.appendChild(image);
  let text = document.createElement("p");
  text.textContent = "Sushi";
  sushiDiv.appendChild(text);
  let price = document.createElement("h3");
  price.textContent = "$35.70";
  sushiDiv.appendChild(price);
  let cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.setAttribute("class", "btn-main");
  cancel.addEventListener(
    "click",
    (removediv = () => {
      sushiDiv.remove();
    })
  );
  sushiDiv.appendChild(cancel);
  itemx.appendChild(sushiDiv);
}
function generateBurger(e) {
  let burgerDiv = document.createElement("div");
  burgerDiv.setAttribute("class", "itemz");
  let image = document.createElement("img");
  image.src = "/img/menu-main.jpg";
  image.style.height = "60px";
  burgerDiv.appendChild(image);
  let text = document.createElement("p");
  text.textContent = "Burger";
  burgerDiv.appendChild(text);
  let price = document.createElement("h3");
  price.textContent = "$45.68";
  burgerDiv.appendChild(price);
  let cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.setAttribute("class", "btn-main");
  cancel.addEventListener(
    "click",
    (removediv = () => {
      burgerDiv.remove();
    })
  );
  burgerDiv.appendChild(cancel);
  itemx.appendChild(burgerDiv);
}
stake.addEventListener("click", generateStake);
sushi.addEventListener("click", generateSushi);
burger.addEventListener("click", generateBurger);
