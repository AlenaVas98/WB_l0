let dataProduct = [
  {
    id: "p1",
    idCheckbox: "checkbox1",
    price: 522,
    totalPrice: 522,
    quantity: 3,
    outOfStoke: 2,
    quantityCart: 1,
    totalDiscount: 1051,
    discount: 1051,
  },
  {
    id: "p2",
    idCheckbox: "checkbox2",
    price: 10500,
    totalPrice: 10500,
    quantity: 300,
    quantityCart: 1,
    totalDiscount: 11500,
    discount: 11500,
  },
  {
    id: "p3",
    idCheckbox: "checkbox3",
    price: 247,
    totalPrice: 247,
    quantity: 4,
    outOfStoke: 3,
    quantityCart: 1,
    totalDiscount: 475,
    discount: 475,
  },
];

const itemChange = (num) => {
  num = Math.abs(num) % 100;
  let num1 = num % 10;
  if (num > 4 && num < 21) {
    return "товаров";
  }
  if (num1 > 1 && num1 < 5) {
    return "товара";
  }
  if (num1 == 1) {
    return "товар";
  }
  return "товаров";
};

let dataCart = [];
const cart = document.querySelector(".cart__mainBox");
const cartDownBox = document.querySelector(".cart__downBox");
const cartUpBox = document.querySelector(".cart__upBox");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");
const cartQuantity = document.querySelector(".header__cart_quantity");
const totalQuantityHide = document.querySelector(".cart__downBox_text");
const totalQuantityResult = document.querySelector(
  ".result__main_price-text-p"
);
const outOfStokeQuantity = document.querySelector(".notAvailable__upBox_text");
const totalAmountResult = document.querySelector(".result__main_header-h3");
const checkboxPrice = document.querySelector(
  ".result__main_payment_boxConfirm_inform-input"
);
const totalAmountWithoutDiscount = document.getElementById("totalAmount");
const totalDiscountCard = document.getElementById("totalDiscount");
const buttonOrder = document.querySelector(".result_boxButton_button");
const quantityCardMobile = document.getElementById("quantityCardMobile");
const chooseAll = document.getElementById("chooseAll");
const checkboxAll = document.querySelectorAll(".checkbox");
// counter
const tshirtCount = document.getElementById("tShirtCount");
const phoneCount = document.getElementById("phoneCount");
const pencilCount = document.getElementById("pencilCount");
//price
const tshirtPrice = document.getElementById("price1");
const phonePrice = document.getElementById("price2");
const pencilPrice = document.getElementById("price3");
//discount
const discountTshirt = document.getElementById("discont1");
const discountPhone = document.getElementById("discont2");
const discountPencil = document.getElementById("discont3");

const quantityTshirt = document.getElementById("quantity1");
const quantityPhone = document.getElementById("quantity2");
const quantityPencils = document.getElementById("quantity3");
const iconshHeart = document.querySelectorAll(".icon-heart");
iconshHeart.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("activeHeart");
  });
});

let valueTShirt = +tshirtCount.value;
let priceTshirt = +tshirtPrice.value;

let valuePhone = +phoneCount.value;
let pricePhone = +phonePrice.value;

let valuePencil = pencilCount.value;
let pricePencil = +pencilPrice.value;

let totalQuantity = 0;
let totalAmount = 0;
let totalAmountWithoutDiscountCard = 0;
let totalDiscount = 0;
let outOfStokeCounter = 3;

let totalAmountTshirt = 1051;
let totalAmountPhone = 11500;
let totalAmountPencil = 475;

function counterProduct() {
  const btn = document.querySelectorAll(
    ".cart__mainBox_productBox_icon_buttonBox_button"
  );

  btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      dataProduct.map((product) => {
        //  ============= tshirt counter
        if (btn.id === "minus1" && product.id === "p1") {
          valueTShirt--;
          priceTshirt -= product.price;
          quantityTshirt.innerHTML = `Осталось ${++product.outOfStoke} шт.`;
          product.quantityCart = +valueTShirt;
          product.totalPrice = priceTshirt;
          product.totalDiscount -= product.discount;
          totalAmountTshirt -= product.discount;
        } else if (btn.id === "plus1" && product.id === "p1") {
          valueTShirt++;
          priceTshirt += product.price;
          quantityTshirt.innerHTML = `Осталось ${--product.outOfStoke} шт.`;
          product.quantityCart = +valueTShirt;
          product.totalPrice = priceTshirt;
          product.totalDiscount += product.discount;
          totalAmountTshirt += product.discount;
        }
        if (valueTShirt == 0) {
          document.getElementById("minus1").disabled = true;
        } else {
          document.getElementById("minus1").disabled = false;
        }

        if (valueTShirt === 3) {
          //проверить
          document.getElementById("plus1").disabled = true;
          quantityTshirt.classList.add("hide");
        } else {
          document.getElementById("plus1").disabled = false;
          quantityTshirt.classList.remove("hide");
        }

        tshirtCount.value = valueTShirt;
        tshirtPrice.value = priceTshirt;

        //  ============= phone counter
        if (btn.id === "minus2" && product.id === "p2") {
          valuePhone--;
          pricePhone -= product.price;
          product.quantityCart = valuePhone;
          product.totalPrice = pricePhone;

          product.totalDiscount -= product.discount;

          totalAmountPhone -= product.discount;
        } else if (btn.id === "plus2" && product.id === "p2") {
          valuePhone++;
          pricePhone += product.price;
          product.quantityCart = valuePhone;
          product.totalPrice = pricePhone;
          product.totalDiscount += product.discount;
          totalAmountPhone += product.discount;
        }
        if (valuePhone == 0) {
          document.getElementById("minus2").disabled = true;
        } else {
          document.getElementById("minus2").disabled = false;
        }
        phoneCount.value = valuePhone;
        phonePrice.value = pricePhone;
        //  ============= pencil counter
        if (btn.id === "minus3" && product.id === "p3") {
          valuePencil--;
          pricePencil -= product.price;
          quantityPencils.innerHTML = `Осталось ${++product.outOfStoke} шт.`;
          product.quantityCart = valuePencil;
          product.totalPrice = pricePencil;
          product.totalDiscount -= product.discount;
          totalAmountPencil -= product.discount;
        } else if (btn.id === "plus3" && product.id === "p3") {
          valuePencil++;
          pricePencil += product.price;
          quantityPencils.innerHTML = `Осталось ${--product.outOfStoke} шт.`;
          product.quantityCart = valuePencil;
          product.totalPrice = pricePencil;
          product.totalDiscount += product.discount;
          totalAmountPencil += product.discount;
        }

        if (valuePencil == 0) {
          document.getElementById("minus3").disabled = true;
        } else {
          document.getElementById("minus3").disabled = false;
        }
        if (valuePencil == product.quantity) {
          document.getElementById("plus3").disabled = true;
          quantityPencils.classList.add("hide");
          console.log(product.quantity);
        } else {
          document.getElementById("plus3").disabled = false;
          quantityPencils.classList.remove("hide");
        }

        pencilCount.value = valuePencil;
        pencilPrice.value = pricePencil;
      });

      if (document.getElementById("checkbox1").checked) {
        addToCartCheck();
      }
      if (document.getElementById("checkbox2").checked) {
        addToCartCheck();
      }
      if (document.getElementById("checkbox3").checked) {
        addToCartCheck();
      }

      updateHTMLData();
    });
  });
}

function updateHTMLData() {
  if (totalQuantity == 0) {
    cartQuantity.classList.add("hide");
    quantityCardMobile.classList.add("hide");
  } else {
    cartQuantity.classList.remove("hide");
    quantityCardMobile.classList.remove("hide");
  }
  cartQuantity.textContent = `${totalQuantity}`;
  quantityCardMobile.textContent = `${totalQuantity}`;
  totalQuantityHide.textContent = `${totalQuantity} ${itemChange(
    totalQuantity
  )} · ${totalAmount} сом`;
  totalQuantityResult.textContent = `${totalQuantity} ${itemChange(
    totalQuantity
  )}`;
  totalAmountResult.innerHTML = `${totalAmount} <span class="result__main_header-h3-span">сом</span>`;
  discountTshirt.textContent = `${totalAmountTshirt} сом`;
  discountPhone.textContent = `${totalAmountPhone} сом`;
  discountPencil.textContent = `${totalAmountPencil} сом`;
  totalAmountWithoutDiscount.textContent = `${totalAmountWithoutDiscountCard} сом`;
  totalDiscountCard.textContent = `${totalDiscount} сом`;
  if (checkboxPrice.checked) {
    buttonOrder.textContent = `Оплатить ${totalAmount} сом`;
  }
}

// =========================================================================== delete

function DeleteProduct() {
  const trash = document.querySelectorAll(".icon-trash");
  trash.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id == "p1") {
        document.getElementById("product1").classList.add("hide");
        dataProduct = dataProduct.filter((id) => {
          return id.idCheckbox != "checkbox1";
        });
        updateCartTrash("checkbox1");
      } else if (btn.id == "p2") {
        document.getElementById("product2").classList.add("hide");
        dataProduct = dataProduct.filter((id) => {
          return id.idCheckbox != "checkbox2";
        });
        updateCartTrash("checkbox2");
      } else if (btn.id == "p3") {
        document.getElementById("product3").classList.add("hide");
        dataProduct = dataProduct.filter((id) => {
          return id.idCheckbox != "checkbox3";
        });
        updateCartTrash("checkbox3");
      }
      if (btn.id == "p4") {
        document.getElementById("product4").classList.add("hide");
        --outOfStokeCounter;
      } else if (btn.id == "p5") {
        document.getElementById("product5").classList.add("hide");
        --outOfStokeCounter;
      } else if (btn.id == "p6") {
        document.getElementById("product6").classList.add("hide");
        --outOfStokeCounter;
      }
      outOfStokeQuantity.textContent = `Отсутствуют · ${outOfStokeCounter} товара`;
    });
  });
}
// =========================================================================== checkbox price

function addPrice() {
  if (checkboxPrice.checked) {
    buttonOrder.textContent = `Оплатить ${totalAmount} сом`;
  } else {
    buttonOrder.textContent = `Заказать`;
  }
}
checkboxPrice.addEventListener("change", addPrice);

// =========================================================================== cart
const modalCart = function () {
  cart.classList.toggle("cartHidden");
  cartUpBox.classList.toggle("cartHidden");
  cartDownBox.classList.toggle("cartHidden");
};
openBtn.addEventListener("click", modalCart);
closeBtn.addEventListener("click", modalCart);

// =========================================================================== choose all

chooseAll.addEventListener("change", (e) => {
  const checked = e.target.checked;
  checkboxAll.forEach((el) => {
    el.checked = checked;
  });
  addToCartCheck(chooseAll.id);
});

checkboxAll.forEach((check) => {
  check.addEventListener("change", (e) => {
    addToCartCheck(check.id);

    let checkboxAllChecked =
      document.querySelectorAll(".checkbox:checked").length;
    if (checkboxAllChecked < 3) {
      chooseAll.checked = false;
    } else {
      chooseAll.checked = true;
    }
  });
});

function addToCartCheck(index) {
  dataProduct.map((product) => {
    if (
      (index === product.idCheckbox && !dataCart.includes(product)) ||
      (index === "chooseAll" && !dataCart.includes(product))
    ) {
      dataCart.push(product);
    }
  });

  for (let i = 0; i < dataCart.length; i++) {
    if (index === dataCart[i].idCheckbox) {
      document.getElementById(index).classList.add("check");
      updateCart(dataCart[i].idCheckbox);
    }
    if (index === "chooseAll") {
      document.getElementById(index).classList.add("check");
      document.getElementById("checkbox1").classList.add("check");
      document.getElementById("checkbox2").classList.add("check");
      document.getElementById("checkbox3").classList.add("check");
      updateCart(dataCart[i].idCheckbox, index);
    }
  }

  totalQuantity = dataCart.reduce((prev, product) => {
    return prev + product.quantityCart;
  }, 0);

  totalAmount = dataCart.reduce((prev, product) => {
    return prev + product.totalPrice;
  }, 0);
  totalAmountWithoutDiscountCard = dataCart.reduce((prev, product) => {
    return prev + product.totalDiscount;
  }, 0);
  totalDiscount = dataCart.reduce((prev, product) => {
    prev += product.totalDiscount - product.totalPrice;
    return prev;
  }, 0);
  console.log(dataCart);
  updateHTMLData();
}

function updateCart(index, chooseAll) {
  if (
    document.getElementById(index).classList.contains("check") &&
    document.getElementById(index).checked == false
  ) {
    dataCart = dataCart.filter((id) => {
      return id.idCheckbox != index;
    });
    totalQuantity = dataCart.reduce((prev, product) => {
      return prev + product.quantityCart;
    }, 0);
    totalAmount = dataCart.reduce((prev, product) => {
      return prev + product.totalPrice;
    }, 0);
    console.log(dataCart);
    totalAmountWithoutDiscountCard = dataCart.reduce((prev, product) => {
      return prev + product.totalDiscount;
    }, 0);
    totalDiscount = dataCart.reduce((prev, product) => {
      prev += product.totalDiscount - product.totalPrice;
      return prev;
    }, 0);
    document.getElementById(index).classList.remove("check");
  }
  if (
    chooseAll === "chooseAll" &&
    document.getElementById(chooseAll).checked == false
  ) {
    console.log("wrw");
    dataCart = [];
    totalQuantity = 0;
  }
}
function updateCartTrash(index) {
  if (
    document.getElementById(index).classList.contains("check") &&
    document.getElementById(index).checked == true
  ) {
    dataCart = dataCart.filter((id) => {
      return id.idCheckbox != index;
    });
    totalQuantity = dataCart.reduce((prev, product) => {
      return prev + product.quantityCart;
    }, 0);
    totalAmount = dataCart.reduce((prev, product) => {
      return prev + product.totalPrice;
    }, 0);
    totalAmountWithoutDiscountCard = dataCart.reduce((prev, product) => {
      return prev + product.totalDiscount;
    }, 0);
    totalDiscount = dataCart.reduce((prev, product) => {
      prev += product.totalDiscount - product.totalPrice;
      return prev;
    }, 0);
    document.getElementById(index).classList.remove("check");
  }
  updateHTMLData();
}

counterProduct();
DeleteProduct();
