const deliveryData = {
  self: [
    {
      id: "d1",
      street: "Бишкек, улица Ахматбека Суюмбаева, 12/1",
      rating: "4.99",
      type: "Пункт выдачи",
      typeCard: "в пункт выдачи",
    },
    {
      id: "d2",
      street: "Бишкек, улица Ахунбаева Исы, д. 67/1",
      rating: "4.99",
      type: "Пункт выдачи",
      typeCard: "в пункт выдачи",
    },
    {
      id: "d3",
      street: "Бишкек, улица Табышалиева, д. 57",
      rating: "4.99",
      type: "Пункт выдачи",
      typeCard: "в пункт выдачи",
    },
  ],
  courier: [
    {
      id: "c1",
      street: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
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
  ],
};

const selfDelivery = document.querySelector(".selfDelivery");
const courierDelivery = document.querySelector(".courierDelivery"); //courierDelivery_hide
const selfDeliveryButton = document.getElementById("self-delivery-button");
const courierDeliveryButton = document.getElementById(
  "courier-delivery-button"
);
const typeDelivery = document.querySelector(".delivery__type-delivery");
const typeDeliveryCard = document.querySelector(".result_delivery-inform");
const deliveryButtonPencil = document.querySelector(
  ".result__main_delivery-text_box-header-button"
);
// ===========================================================================  delivery inform main
const deliveryIinform = document.querySelector(".delivery__inform");
const deliveryIinformCard = document.querySelector(
  ".result__main_delivery-inform"
);
let selectedDelivery = deliveryData.self[0];

function renderDeliveryInform(data) {
  typeDelivery.innerHTML = `
  <h3 class="delivery__text">${data.type}</h3>
  `;

  // ============
  deliveryIinform.innerHTML = `
  <p class="delivery__box-inform_address-text-main">
  ${data.street}
  </p>
  <p class="delivery__box-inform_address-text">
  <img src="./icons/star_fill.svg" alt="gold star" /> ${data.rating}
  Ежедневно c 10 до 21
  </p>`;
  // ====
  typeDeliveryCard.innerHTML = `
   <h2 class="result__main_delivery-text_box-header-h2">
   Доставка ${data.typeCard}
   </h2>`;
  // ====
  deliveryIinformCard.innerHTML = `
  <span class="result__main_delivery-text-p"
  >${data.street}</span
  >`;
}
//  ============================================================================  delivery module self
function setDeliveryModuleInform() {
  selfDelivery.innerHTML = "";
  for (let i = 0; i < deliveryData.self.length; i++) {
    let div = document.createElement("div");
    div.classList.add("delivery-module_box-address");
    div.id = deliveryData.self[i].id;

    let inputChecked = "";
    if (i === 0) {
      inputChecked = "checked";
    }

    div.innerHTML = `
    <label class="delivery-module_box-address_label">
  <input
    type="radio"
    class="delivery-module_box-address_input hide"
    name="radio"
    id=${deliveryData.self[i].id}
    ${inputChecked}
  />
  <span class="delivery-module_box-address_span"></span>
  <p class="delivery-module_boxAddress_p">
  ${deliveryData.self[i].street}
    <span class="delivery-module_box-address_p_span"
    ><img src="./icons/star_fill.svg" />
    <span
    class="delivery-module_box-address_p_rating"
    >${deliveryData.self[i].rating}</span
    > Пункт выдачи</span
    >
  </p>
</label>
<button class="delivery-module_box-address_buttonTrash">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    class="icon-trash"
    id=${deliveryData.self[i].id}
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
  for (let i = 0; i < deliveryData.courier.length; i++) {
    let div = document.createElement("div");
    div.classList.add("delivery-module_box-address");
    div.id = deliveryData.courier[i].id;
    div.innerHTML = `
    <label class="delivery-module_box-address_label">
  <input
    type="radio"
    class="delivery-module_box-address_input hide"
    name="radio"
    id=${deliveryData.courier[i].id}
  />
  <span class="delivery-module_box-address_span"></span>
  <p class="delivery-module_box-address_p">
  ${deliveryData.courier[i].street}
  </p>
  </label>
  <button class="delivery-module_box-address_buttonTrash">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    class="icon-trash"
    id=${deliveryData.courier[i].id}
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
  ".delivery-module_button-close"
);
const buttonChooseDelivery = document.querySelector(
  ".delivery-module_button-choose"
);
const deliveryModule = document.querySelector(".delivery-module");

const openDeliveryBox = function () {
  forModuleBox.classList.add("block");
  deliveryModule.classList.remove("hide");
};

deliveryButton.addEventListener("click", openDeliveryBox);
deliveryButtonPencil.addEventListener("click", openDeliveryBox);

const closeDeliveryBox = function () {
  forModuleBox.classList.remove("block");
  deliveryModule.classList.add("hide");
  renderDeliveryInform(selectedDelivery);
};

function selectDelivery(delivery) {
  selectedDelivery = delivery;
}

function chooseDataDelivery(event) {
  const deliveryId = event.target.closest(".delivery-module_box-address").id;
  const self = deliveryData.self.find((self) => self.id === deliveryId);
  if (self) {
    selectDelivery(self);
  }
  const courier = deliveryData.courier.find(
    (courier) => courier.id === deliveryId
  );
  if (courier) {
    selectDelivery(courier);
  }
}
selfDelivery.addEventListener("click", chooseDataDelivery);

courierDelivery.addEventListener("click", chooseDataDelivery);

buttonCloseDelivery.addEventListener("click", () => {
  forModuleBox.classList.remove("block");
  deliveryModule.classList.add("hide");
});
buttonChooseDelivery.addEventListener("click", closeDeliveryBox);

// =========================================================================== delivery  choice

selfDeliveryButton.addEventListener("click", () => {
  courierDelivery.classList.toggle("hide");
  selfDelivery.classList.toggle("hide");
  selfDeliveryButton.classList.toggle("active-button");
  courierDeliveryButton.classList.toggle("active-button");
});

courierDeliveryButton.addEventListener("click", () => {
  selfDelivery.classList.toggle("hide");
  courierDelivery.classList.toggle("hide");
  courierDeliveryButton.classList.toggle("active-button");
  selfDeliveryButton.classList.toggle("active-button");
});

function DeleteDelivery() {
  const trash = document.querySelectorAll(".icon-trash");
  trash.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.id;
      if (id.startsWith("d")) {
        deliveryData.self = deliveryData.self.filter((item) => item.id !== id);
        setDeliveryModuleInform();
      } else if (id.startsWith("c")) {
        deliveryData.courier = deliveryData.courier.filter(
          (item) => item.id !== id
        );
        setDeliveryModuleInformCourier();
      }
    });
  });
}
function initialize() {
  renderDeliveryInform(selectedDelivery);
  setDeliveryModuleInform();
  setDeliveryModuleInformCourier();
}
initialize();
