/* const products = [
  {
    id: 1,
    title: "Macbook Pro",
    price: 2500.0,
    qty: 1,
    image: "http://lorempixel.com/150/150/",
  },
  {
    id: 2,
    title: "Asus ROG Gaming",
    price: 1000.0,
    qty: 1,
    image: "http://lorempixel.com/150/150/",
  },
  {
    id: 3,
    title: "Amazon Kindle",
    price: 150.0,
    qty: 1,
    image: "http://lorempixel.com/150/150/",
  },
  {
    id: 4,
    title: "Another Product",
    price: 10,
    qty: 1,
    image: "http://lorempixel.com/150/150/",
  },
];

function formatNumber(n, c, d, t) {
  var c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d === undefined ? "." : d,
    t = t === undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
}

// Allow the formatNumber function to be used as a filter
Vue.filter("formatCurrency", function (value) {
  return formatNumber(value, 2, ".", ",");
});

// The shopping cart component
Vue.component("shopping-cart", {
  props: ["items"],

  computed: {
    Total() {
      let total = 0;
      this.items.forEach((item) => {
        total += item.price * item.qty;
      });
      return total;
    },
  },

  methods: {
    // Remove item by its index
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
});

const vm = new Vue({
  el: "#app",

  data: {
    cartItems: [],
    items: products,
  },

  methods: {
    // Add Items to cart
    addToCart(itemToAdd) {
      let found = false;

      // Add the item or increase qty
      let itemInCart = this.cartItems.filter(
        (item) => item.id === itemToAdd.id
      );
      let isItemInCart = itemInCart.length > 0;

      if (isItemInCart === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      } else {
        itemInCart[0].qty += itemToAdd.qty;
      }

      itemToAdd.qty = 1;
    },
  },
});
 */

/* var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;

  el.parent()
    .children(".full-price")
    .html(eq + "€");

  changeTotal();
}

function changeTotal() {
  var price = 0;

  $(".full-price").each(function (index) {
    price += parseFloat($(".full-price").eq(index).html());
  });

  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100;
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) * 100) / 100;

  if (price == 0) {
    fullPrice = 0;
  }

  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function () {
  $(".remove").click(function () {
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(function () {
      el.parent()
        .parent()
        .slideUp("fast", function () {
          el.parent().parent().remove();
          if ($(".product").length == 0) {
            if (check) {
              $("#cart").html(
                "<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>"
              );
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal();
        });
    }, 200);
  });

  $(".qt-plus").click(function () {
    $(this)
      .parent()
      .children(".qt")
      .html(parseInt($(this).parent().children(".qt").html()) + 1);

    $(this).parent().children(".full-price").addClass("added");

    var el = $(this);
    window.setTimeout(function () {
      el.parent().children(".full-price").removeClass("added");
      changeVal(el);
    }, 150);
  });

  $(".qt-minus").click(function () {
    child = $(this).parent().children(".qt");

    if (parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }

    $(this).parent().children(".full-price").addClass("minused");

    var el = $(this);
    window.setTimeout(function () {
      el.parent().children(".full-price").removeClass("minused");
      changeVal(el);
    }, 150);
  });

  window.setTimeout(function () {
    $(".is-open").removeClass("is-open");
  }, 1200);

  $(".btn").click(function () {
    check = true;
    $(".remove").click();
  });
});
 */

let qty = document.querySelector(".qt");
let qty1 = document.querySelector(".qt1");
let qty2 = document.querySelector(".qt2");
let addQty = document.querySelector(".qt-plus");
let addQty1 = document.querySelector(".qt-plus1");
let addQty2 = document.querySelector(".qt-plus2");
let subQty = document.querySelector(".qt-minus");
let subQty1 = document.querySelector(".qt-minus1");
let subQty2 = document.querySelector(".qt-minus2");
let price = document.querySelector(".price1");
let price1 = document.querySelector(".price2");
let price2 = document.querySelector(".price3");
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
  cash += 13;
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
    cash -= 13;
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

function totalCalc(e) {
  total.textContent =
    JSON.parse(price.textContent) +
    JSON.parse(price1.textContent) +
    JSON.parse(price2.textContent);
}

addQty.addEventListener("click", add);
addQty1.addEventListener("click", add1);
addQty2.addEventListener("click", add2);
subQty.addEventListener("click", substract);
subQty1.addEventListener("click", substract1);
subQty2.addEventListener("click", substract2);

console.log(qty);
console.log(addQty);
console.log(subQty);
