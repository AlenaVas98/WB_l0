const forModuleBox = document.querySelector(".forModule");
// =========================================================================== cart
const cart = document.querySelector(".cart__mainBox");
const cartDownBox = document.querySelector(".cart__downBox");
const cartUpBox = document.querySelector(".cart__upBox");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");
const openBox = function () {
  cart.classList.add("cartHidden");
  cartUpBox.classList.add("cartHidden");
  cartDownBox.classList.remove("cartHidden");
};
openBtn.addEventListener("click", openBox);
const closeBox = function () {
  cart.classList.remove("cartHidden");
  cartUpBox.classList.remove("cartHidden");
  cartDownBox.classList.add("cartHidden");
};
closeBtn.addEventListener("click", closeBox);
// =========================================================================== out of stock

const outOfStoke = document.querySelector(".notAvailable__mainBox");
const outOfStokeDownBox = document.querySelector(".notAvailable__downBox");
const outOfStokeUpBox = document.querySelector(".notAvailable__upBox");
const outOfStokeOpenBtn = document.querySelector(
  ".notAvailable__upBox_btn-close"
);
const outOfStokeCloseBtn = document.querySelector(
  ".notAvailable__downBox_btn-open"
);

const openModalOutOfStoke = function () {
  outOfStoke.classList.add("cartHidden");
  outOfStokeUpBox.classList.add("cartHidden");
  outOfStokeDownBox.classList.remove("cartHidden");
};
outOfStokeOpenBtn.addEventListener("click", openModalOutOfStoke);

const closeModalOutOfStoke = function () {
  outOfStoke.classList.remove("cartHidden");
  outOfStokeUpBox.classList.remove("cartHidden");
  outOfStokeDownBox.classList.add("cartHidden");
};
outOfStokeCloseBtn.addEventListener("click", closeModalOutOfStoke);

// =========================================================================== checkbox price

const checkboxPrice = document.querySelector(
  ".result__main_payment_boxConfirm_inform-input"
);
const buttonOrder = document.querySelector(".result_boxButton_button");
function addPrice() {
  if (checkboxPrice.checked) {
    buttonOrder.textContent = `Оплатить 2 101 063 сом`;
  } else {
    buttonOrder.textContent = `Заказать`;
  }
}
checkboxPrice.addEventListener("change", addPrice);

// =========================================================================== choose all

const chooseAll = document.querySelector("#chooseAll");
const checkboxAll = document.querySelectorAll(
  ".cart__mainBox_productBox_product_input"
);

chooseAll.addEventListener("change", (e) => {
  const checked = e.target.checked;
  checkboxAll.forEach((el) => {
    el.checked = checked;
  });
});

chooseAll.addEventListener("change", (e) => {
  const allchecksLen = document.checkboxAll.length;
  const selectedChecksLen = document.checkboxAll.length;
  const main = document.chooseAll;
  main.indeterminate =
    selectedChecksLen > 0 && selectedChecksLen < allchecksLen;
  main.checked = selectedChecksLen === allchecksLen;
});
