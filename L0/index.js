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
// =========================================================================== box with card button
//
const forModuleBox = document.querySelector(".forModule");
//
const cardButton = document.querySelector(".cardButtonOpen"); //button
const buttonClose = document.querySelector(".cardModule_buttonClose"); // button close
const buttonChoose = document.querySelector(".cardModule_buttonChoose"); //button choose
const cardModule = document.querySelector(".cardModule");

const openCardBox = function () {
  forModuleBox.classList.add("block");
  cardModule.classList.remove("cardHidden");
};

cardButton.addEventListener("click", openCardBox);

const closeCardBox = function () {
  forModuleBox.classList.remove("block");
  cardModule.classList.add("cardHidden");
};

buttonClose.addEventListener("click", closeCardBox);
buttonChoose.addEventListener("click", closeCardBox);
// =========================================================================== box with card pencil
const cardButtonPencil = document.querySelector(".cardButtonPencilOpen"); //pencil

const openCardBoxPencil = function () {
  forModuleBox.classList.add("block");
  cardModule.classList.remove("cardHidden");
};

cardButtonPencil.addEventListener("click", openCardBoxPencil);

// =========================================================================== box delivery button
const deliveryButton = document.querySelector(".delivery__head-button"); //button
const buttonCloseDelivery = document.querySelector(
  ".deliveryModule_buttonClose"
); // button close
const buttonChooseDelivery = document.querySelector(
  ".deliveryModule_buttonChoose"
); //button choose
const deliveryModule = document.querySelector(".deliveryModule");

const openDeliveryBox = function () {
  forModuleBox.classList.add("block");
  deliveryModule.classList.remove("deliveryHidden");
  console.log("open");
};

deliveryButton.addEventListener("click", openDeliveryBox);

const closeDeliveryBox = function () {
  forModuleBox.classList.remove("block");
  deliveryModule.classList.add("deliveryHidden");
};

buttonCloseDelivery.addEventListener("click", closeDeliveryBox);
buttonChooseDelivery.addEventListener("click", closeDeliveryBox);
// =========================================================================== box delivery pencil
const deliveryButtonPencil = document.querySelector(
  ".result__main_delivery-text_boxHeader-button"
); //pencil

const openDeliveryBoxPencil = function () {
  forModuleBox.classList.add("block");
  deliveryModule.classList.remove("deliveryHidden");
};

deliveryButtonPencil.addEventListener("click", openDeliveryBoxPencil);

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

// =========================================================================== delivery  choice
const selfDelivery = document.querySelector(".selfDelivery"); // selfDelivery_hide
const courierDelivery = document.querySelector(".courierDelivery"); //courierDelivery_hide
const selfDeliveryButton = document.querySelector(".selfDeliveryButton");
const courierDeliveryButton = document.querySelector(".courierDeliveryButton");

selfDeliveryButton.addEventListener("click", () => {
  courierDelivery.classList.add("courierDelivery_hide");
  selfDelivery.classList.remove("selfDelivery_hide");
  selfDeliveryButton.classList.add("activeButton");
  courierDeliveryButton.classList.remove("activeButton");
});

courierDeliveryButton.addEventListener("click", () => {
  selfDelivery.classList.add("selfDelivery_hide");
  courierDelivery.classList.remove("courierDelivery_hide");
  courierDeliveryButton.classList.add("activeButton");
  selfDeliveryButton.classList.remove("activeButton");
});
