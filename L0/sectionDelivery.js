let dataDelivery = [
  {
    id: "d1",
    street: " Бишкек, улица Ахматбека Суюмбаева, 12/1",
    rating: "4.99",
    type: "Пункт выдачи",
    typeCard: "в пункт выдачи",
  },
  {
    id: "d2",
    street: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    rating: "4.99",
    type: "Пункт выдачи",
    typeCard: "в пункт выдачи",
  },
  {
    id: "d3",
    street: "г. Бишкек, улица Табышалиева, д. 57",
    rating: "4.99",
    type: "Пункт выдачи",
    typeCard: "в пункт выдачи",
  },
];

let dataDeliveryCourier = [
  {
    id: "c1",
    street: " Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
    type: "Курьером",
    typeCard: "курьером",
    rating: "",
  },
  {
    id: "c2",
    street: "Бишкек, улица Жукеева-Пудовкина, 77/1",
    type: "Курьером",
    typeCard: "курьером",
    rating: "",
  },
  {
    id: "c3",
    street: "Бишкек, улица Табышалиева, 57",
    type: "Курьером",
    typeCard: "курьером",
    rating: "",
  },
];

const selfDelivery = document.querySelector(".selfDelivery"); // selfDelivery_hide
const courierDelivery = document.querySelector(".courierDelivery"); //courierDelivery_hide
const selfDeliveryButton = document.querySelector(".selfDeliveryButton");
const courierDeliveryButton = document.querySelector(".courierDeliveryButton");
const typeDelivery = document.querySelector(".delivery__typeDelivery");
const typeDeliveryCard = document.querySelector(".result_delivery-inform");
let newAddressDelivery = [];

// ===========================================================================  delivery inform main
const deliveryIinform = document.querySelector(".delivery__inform");
const deliveryIinformCard = document.querySelector(
  ".result__main_delivery-inform"
);

function setDeliveryInform() {
  // ===
  typeDelivery.innerHTML = `
  <h3 class="delivery__text">${dataDelivery[0].type}</h3>
  `;

  // ============
  deliveryIinform.innerHTML = `
  <p class="delivery__boxInform_address-textMain">
  ${dataDelivery[0].street}
  </p>
  <p class="delivery__boxInform_address-text">
  <img src="./icons/star_fill.svg" alt="gold star" /> ${dataDelivery[0].rating}
  Ежедневно c 10 до 21
  </p>`;
  // ====
  typeDeliveryCard.innerHTML = `
   <h2 class="result__main_delivery-text_boxHeader-h2">
   Доставка ${dataDelivery[0].typeCard}
   </h2>`;
  // ====
  deliveryIinformCard.innerHTML = `
  <span class="result__main_delivery-text-p"
  >${dataDelivery[0].street}</span
  >`;
}
//  ============================================================================  delivery module self
function setDeliveryModuleInform() {
  selfDelivery.innerHTML = "";
  console.log(dataDelivery);
  for (let i = 0; i < dataDelivery.length; i++) {
    let div = document.createElement("div");
    div.classList.add("deliveryModule_boxAddress");
    div.id = dataDelivery[i].id;
    div.innerHTML = `
    <label class="deliveryModule_boxAddress_label">
  <input
    type="radio"
    class="deliveryModule_boxAddress_input"
    name="radio"
    id=${dataDelivery[i].id}
  />
  <span class="deliveryModule_boxAddress_span"></span>
  <p class="deliveryModule_boxAddress_p">
  ${dataDelivery[i].street}
    <span class="deliveryModule_boxAddress_p_span"
    ><img src="./icons/star_fill.svg" />
    <span
    class="deliveryModule_boxAddress_p_rating"
    >${dataDelivery[i].rating}</span
    > Пункт выдачи</span
    >
  </p>
</label>
<button class="deliveryModule_boxAddress_buttonTrash">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    class="icon-trash"
    id=${dataDelivery[i].id}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
      fill="#9797AF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
      fill="#9797AF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
      fill="#9797AF"
    />
  </svg>
</button>`;
    selfDelivery.appendChild(div);
  }
  DeleteDelivery();
}

//  ================================================================================= delivery module courier

function setDeliveryModuleInformCourier() {
  courierDelivery.innerHTML = "";
  for (let i = 0; i < dataDeliveryCourier.length; i++) {
    let div = document.createElement("div");
    div.classList.add("deliveryModule_boxAddress");
    div.id = dataDeliveryCourier[i].id;
    div.innerHTML = `
    <label class="deliveryModule_boxAddress_label">
  <input
    type="radio"
    class="deliveryModule_boxAddress_input"
    name="radio"
    id=${dataDeliveryCourier[i].id}
  />
  <span class="deliveryModule_boxAddress_span"></span>
  <p class="deliveryModule_boxAddress_p">
  ${dataDeliveryCourier[i].street}
  </p>
  </label>
  <button class="deliveryModule_boxAddress_buttonTrash">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    class="icon-trash"
    id=${dataDeliveryCourier[i].id}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
      fill="#9797AF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
      fill="#9797AF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
      fill="#9797AF"
    />
  </svg>
  </button>`;
    courierDelivery.appendChild(div);
  }
  DeleteDelivery();
}

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
  newAddressDelivery = [];
  forModuleBox.classList.add("block");
  deliveryModule.classList.remove("deliveryHidden");
};

deliveryButton.addEventListener("click", openDeliveryBox);

const closeDeliveryBox = function () {
  forModuleBox.classList.remove("block");
  deliveryModule.classList.add("deliveryHidden");

  // ===
  typeDelivery.innerHTML = `
   <h3 class="delivery__text">${newAddressDelivery[0].type}</h3>
   `;

  // ============
  deliveryIinform.innerHTML = `
   <p class="delivery__boxInform_address-textMain">
   ${newAddressDelivery[0].street}
   </p>
   <p class="delivery__boxInform_address-text">
   <img src="./icons/star_fill.svg" alt="gold star" /> ${newAddressDelivery[0].rating}
   Ежедневно c 10 до 21
   </p>`;
  // ====
  typeDeliveryCard.innerHTML = `
    <h2 class="result__main_delivery-text_boxHeader-h2">
    Доставка ${newAddressDelivery[0].typeCard}
    </h2>`;
  // ====
  deliveryIinformCard.innerHTML = `
   <span class="result__main_delivery-text-p"
   >${newAddressDelivery[0].street}</span
   >`;
};

buttonCloseDelivery.addEventListener("click", closeDeliveryBox);
buttonChooseDelivery.addEventListener("click", closeDeliveryBox);
// =========================================================================== box delivery pencil
const deliveryButtonPencil = document.querySelector(
  ".result__main_delivery-text_boxHeader-button"
); //pencil

const openDeliveryBoxPencil = function () {
  newAddressDelivery = [];
  forModuleBox.classList.add("block");
  deliveryModule.classList.remove("deliveryHidden");
};

deliveryButtonPencil.addEventListener("click", openDeliveryBoxPencil);

// =========================================================================== delivery  choice

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

setDeliveryInform();
setDeliveryModuleInform();
setDeliveryModuleInformCourier();

const elemDelivery = document.querySelectorAll(
  ".deliveryModule_boxAddress_input"
);
const elemIdDelivery = elem[0].id;
if (
  elemIdDelivery == dataDelivery[0].id ||
  elemIdDelivery == dataDeliveryCourier[0].id
) {
  elemDelivery[0].checked = true;
}

const newDivDelivery = document.querySelector(".selfDelivery");
newDivDelivery.addEventListener("click", (event) => {
  for (let i = 0; i < dataDelivery.length; i++) {
    if (dataDelivery[i].id === event.target.id) {
      newAddressDelivery.pop();
      newAddressDelivery.push(dataDelivery[i]);
    }
  }
});
const newDivDeliveryCourier = document.querySelector(".courierDelivery");

newDivDeliveryCourier.addEventListener("click", (event) => {
  for (let i = 0; i < dataDeliveryCourier.length; i++) {
    if (dataDeliveryCourier[i].id === event.target.id) {
      newAddressDelivery.pop();
      newAddressDelivery.push(dataDeliveryCourier[i]);
    }
  }
});
function DeleteDelivery() {
  const trash = document.querySelectorAll(".icon-trash");
  trash.forEach((btn) => {
    btn.addEventListener("click", () => {
      let filerData = dataDelivery.filter(({ id }) => {
        console.log(btn.id);
        console.log(id);

        return id !== btn.id;
      });
      // console.log(filerData);
      dataDelivery = filerData;
      setDeliveryModuleInform();
    });
    btn.addEventListener("click", () => {
      let filerDataCourier = dataDeliveryCourier.filter(({ id }) => {
        console.log(btn.id);
        console.log(id);

        return id !== btn.id;
      });
      // console.log(filerData);
      dataDeliveryCourier = filerDataCourier;
      setDeliveryModuleInformCourier();
    });
  });
}
