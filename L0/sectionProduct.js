const tshirtCount = document.getElementById("tShirtCount");
const phoneCount = document.getElementById("phoneCount");
const pencilCount = document.getElementById("pencilCount");

const quantityTshirt = document.getElementById("quantity1");
const quantityPhone = document.getElementById("quantity2");
const quantityPencils = document.getElementById("quantity3");

const tshirtPrice = document.getElementById("price1");
const phonePrice = document.getElementById("price2");
const pencilPrice = document.getElementById("price3");

const deliveryTshirt = document.getElementById("delivery-tshirt");

const tShirt = document.getElementById("t-shirt");
const productDelivery1 = document.getElementById("product-delivery1");

const phone = document.getElementById("phone");
const productDelivery2 = document.getElementById("product-delivery2");

const pencil = document.getElementById("pencil");
const productDelivery3 = document.getElementById("product-delivery3");

const phone2 = document.getElementById("phone-late");
const productDelivery4 = document.getElementById("product-delivery4");

const totalDiscounts = {
  tshirt: 1051,
  phone: 11500,
  pencil: 475,
};

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
    countProduct: +tshirtCount.value,
    productPrice: +tshirtPrice.value,
    quantityProduct: quantityTshirt,
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
    countProduct: +phoneCount.value,
    productPrice: +phonePrice.value,
    quantityProduct: quantityPhone,
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
    countProduct: +pencilCount.value,
    productPrice: +pencilPrice.value,
    quantityProduct: quantityPencils,
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
const cart = document.querySelector(".cart__main-box");
const cartDownBox = document.querySelector(".cart__down-box");
const cartUpBox = document.querySelector(".cart__up-box");
const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");
const cartQuantity = document.querySelector(".header__cart_quantity");
const totalQuantityHide = document.querySelector(".cart__down-box_text");
const totalQuantityResult = document.querySelector(
  ".result__main_price-text-p"
);
const outOfStokeQuantity = document.querySelector(".notAvailable__up-box_text");
const outOfStokeQuantityDown = document.querySelector(
  ".notAvailable__down-box_text"
);
const totalAmountResult = document.querySelector(".result__main_header-h3");
const checkboxPrice = document.querySelector(
  ".result__main_payment_box-confirm_inform-input"
);
const totalAmountWithoutDiscount = document.getElementById("totalAmount");
const totalDiscountCard = document.getElementById("totalDiscount");
const buttonOrder = document.querySelector(".result_box-button_button");
const quantityCardMobile = document.getElementById("quantityCardMobile");
const chooseAll = document.getElementById("chooseAll");
const checkboxAll = document.querySelectorAll(".checkbox");
const discountTshirt = document.getElementById("discont1");
const discountPhone = document.getElementById("discont2");
const discountPencil = document.getElementById("discont3");

const iconshHeart = document.querySelectorAll(".icon-heart");
iconshHeart.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("activeHeart");
  });
});

let totalQuantity = 0;
let totalAmount = 0;
let totalAmountWithoutDiscountCard = 0;
let totalDiscount = 0;
let outOfStokeCounter = 3;

function counterProduct() {
  const btn = document.querySelectorAll(
    ".cart__main-box_product-box_icon_button-box_button"
  );

  btn.forEach((btn) => {
    let name = btn.name;
    let action = btn.id;
    btn.addEventListener("click", () => {
      const product = dataProduct.find((item) => item.id === name);
      if (!product) return;

      const disabledMinus = document.getElementsByName(`${name}`)[0];
      const disabledPlus = document.getElementsByName(`${name}`)[1];

      if (action === "minus") {
        product.countProduct--;
        product.productPrice -= product.price;
        if (product.id === "p1" || product.id === "p3") {
          product.quantityProduct.innerHTML = `Осталось ${++product.outOfStoke} шт.`;
        }
        product.quantityCart = product.countProduct;
        product.totalPrice = product.productPrice;
        product.totalDiscount -= product.discount;
      } else if (action === "plus") {
        product.countProduct++;
        product.productPrice += product.price;
        if (product.id === "p1" || product.id === "p3") {
          product.quantityProduct.innerHTML = `Осталось ${--product.outOfStoke} шт.`;
        }
        product.quantityCart = product.countProduct;
        product.totalPrice = product.productPrice;
        product.totalDiscount += product.discount;
      }

      disabledMinus.disabled = product.countProduct === 1;
      disabledPlus.disabled = product.countProduct === product.quantity;
      if (product.countProduct === product.quantity) {
        product.quantityProduct.innerHTML = "";
      }
      const checkboxChecked = document.getElementById(
        product.idCheckbox
      ).checked;
      if (checkboxChecked) {
        addToCartCheck();
        deliveryProducts(product.idCheckbox);
      }

      switch (product.id) {
        case "p1":
          tshirtCount.value = product.countProduct;
          tshirtPrice.value = product.productPrice;
          totalDiscounts.tshirt = product.totalDiscount;
          break;
        case "p2":
          phoneCount.value = product.countProduct;
          phonePrice.value = product.productPrice;
          totalDiscounts.phone = product.totalDiscount;
          break;
        case "p3":
          pencilCount.value = product.countProduct;
          pencilPrice.value = product.productPrice;
          totalDiscounts.pencil = product.totalDiscount;
          break;
        default:
          break;
      }

      updateHTMLData();
    });
  });
}

function updateHTMLData() {
  const hideClass = "hide";
  cartQuantity.classList.toggle(hideClass, totalQuantity === 0);
  quantityCardMobile.classList.toggle(hideClass, totalQuantity === 0);

  cartQuantity.textContent = `${totalQuantity}`;
  quantityCardMobile.textContent = `${totalQuantity}`;
  totalQuantityHide.textContent = `${totalQuantity} ${itemChange(
    totalQuantity
  )} · ${totalAmount} сом`;
  totalQuantityResult.textContent = `${totalQuantity} ${itemChange(
    totalQuantity
  )}`;
  totalAmountResult.innerHTML = `${totalAmount} <span class="result__main_header-h3-span">сом</span>`;
  discountTshirt.textContent = `${totalDiscounts.tshirt} сом`;
  discountPhone.textContent = `${totalDiscounts.phone} сом`;
  discountPencil.textContent = `${totalDiscounts.pencil} сом`;
  totalAmountWithoutDiscount.textContent = `${totalAmountWithoutDiscountCard} сом`;
  totalDiscountCard.textContent = `- ${totalDiscount} сом`;
  if (checkboxPrice.checked) {
    buttonOrder.textContent = `Оплатить ${totalAmount} сом`;
  }
}

// =========================================================================== delete

function DeleteProduct() {
  const trash = document.querySelectorAll(".icon-trash");
  trash.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.id.replace("p", "");

      const productElement = document.getElementById(`product${productId}`);
      if (productElement) {
        productElement.classList.add("hide");
      }
      dataProduct = dataProduct.filter(
        (id) => id.idCheckbox !== `checkbox${productId}`
      );
      if (document.getElementById(`checkbox${productId}`).id === "checkbox1") {
        productDelivery1.classList.add("hide");
      }
      if (document.getElementById(`checkbox${productId}`).id === "checkbox2") {
        productDelivery2.classList.add("hide");
        productDelivery4.classList.add("hide");
        document.getElementById("late-delivery").classList.add("hide");
      }
      if (document.getElementById(`checkbox${productId}`).id === "checkbox3") {
        productDelivery3.classList.add("hide");
      }
      if (dataProduct.length === 0) {
        document.getElementById("delivery-date").classList.add("hide");
      }

      updateCartTrash(`checkbox${productId}`);
      if (btn.id === "p4" || btn.id === "p5" || btn.id === "p6") {
        --outOfStokeCounter;
      }
      outOfStokeQuantity.textContent = `Отсутствуют · ${outOfStokeCounter} товара`;
      outOfStokeQuantityDown.textContent = `Отсутствуют · ${outOfStokeCounter} товара`;
    });
  });
}

function addPrice() {
  if (checkboxPrice.checked) {
    buttonOrder.textContent = `Оплатить ${totalAmount} сом`;
    document
      .querySelector(".result__main_payment_box-confirm-p")
      .classList.add("hide");
  } else {
    buttonOrder.textContent = `Заказать`;
    document
      .querySelector(".result__main_payment_box-confirm-p")
      .classList.remove("hide");
  }
}
checkboxPrice.addEventListener("change", addPrice);
// =========================================================================== cart
const modalCart = function () {
  cart.classList.toggle("hide");
  cartUpBox.classList.toggle("hide");
  cartDownBox.classList.toggle("hide");
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

  if (dataCart.length >= 1) {
    document.getElementById("delivery-date").classList.remove("hide");
  }
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

    if (dataCart.length === 0) {
      document.getElementById("delivery-date").classList.add("hide");
    } else {
      document.getElementById("delivery-date").classList.remove("hide");
    }
  });
});

function deliveryProducts(id, chooseAll) {
  const product = dataCart.find((item) => item.idCheckbox === id);
  if (!product) return;

  const checkbox1Checked = document.getElementById("checkbox1").checked;
  const checkbox2Checked = document.getElementById("checkbox2").checked;
  const checkbox3Checked = document.getElementById("checkbox3").checked;

  if (id === "checkbox1") {
    tShirt.innerHTML = product.quantityCart;
    productDelivery1.classList.toggle("hide", !checkbox1Checked);
  } else if (id === "checkbox2") {
    phone.innerHTML = product.quantityCart;
    phone2.innerHTML = Math.max(0, product.quantityCart - 5);
    const phoneDeliveryVisible = checkbox2Checked && product.quantityCart > 5;
    productDelivery2.classList.toggle("hide", !checkbox2Checked);
    productDelivery4.classList.toggle(
      "hide",
      !checkbox2Checked || !phoneDeliveryVisible
    );
    document
      .getElementById("late-delivery")
      .classList.toggle("hide", !checkbox2Checked || !phoneDeliveryVisible);
  } else if (id === "checkbox3") {
    pencil.innerHTML = product.quantityCart;
    productDelivery3.classList.toggle("hide", !checkbox3Checked);
  }

  if (chooseAll) {
    const allChecked = document.getElementById(chooseAll).checked;
    if (!allChecked) {
      productDelivery1.classList.add("hide");
      productDelivery2.classList.add("hide");
      productDelivery3.classList.add("hide");
      productDelivery4.classList.add("hide");
      document.getElementById("late-delivery").classList.add("hide");
      document.getElementById("delivery-date").classList.add("hide");
    }
  }
}

function addToCartCheck(index) {
  let checkboxesToUpdate = [];
  dataProduct.forEach((product) => {
    const isChecked = index === product.idCheckbox || index === "chooseAll";
    if (isChecked && !dataCart.includes(product)) {
      dataCart.push(product);
    }
    if (isChecked) {
      checkboxesToUpdate.push(product.idCheckbox);
    }
  });
  checkboxesToUpdate.forEach((checkbox) => {
    document.getElementById(checkbox).classList.add("check");
    updateCart(checkbox, index === "chooseAll" ? "chooseAll" : null);
  });

  totalQuantity = dataCart.reduce(
    (prev, product) => prev + product.quantityCart,
    0
  );
  totalAmount = dataCart.reduce(
    (prev, product) => prev + product.totalPrice,
    0
  );
  totalAmountWithoutDiscountCard = dataCart.reduce(
    (prev, product) => prev + product.totalDiscount,
    0
  );
  totalDiscount = dataCart.reduce(
    (prev, product) => prev + (product.totalDiscount - product.totalPrice),
    0
  );

  updateHTMLData();
}

function updateCart(index, chooseAll) {
  deliveryProducts(index, chooseAll);
  console.log(index);
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

function initialize() {
  if (chooseAll.checked) {
    checkboxAll.forEach((check) => {
      addToCartCheck(check.id);
    });
  }
  counterProduct();
  DeleteProduct();
  updateHTMLData();
}

initialize();
