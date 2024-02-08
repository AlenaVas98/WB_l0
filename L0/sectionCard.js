const dataCard = [
  {
    id: "c1",
    cardImg: "./icons/mir.svg",
    number: "1234 12•• •••• 1234",
    date: "01/30",
  },
  {
    id: "c2",
    cardImg: "./icons/visa.svg",
    number: "1243 12•• •••• 8534",
    date: "09/28",
  },
  {
    id: "c3",
    cardImg: "./icons/mastercard.svg",
    number: "9284 32•• •••• 3274",
    date: "06/42",
  },
  {
    id: "c4",
    cardImg: "./icons/maestro.svg",
    number: "1938 15•• •••• 1937",
    date: "02/35",
  },
];

//
const cardButton = document.querySelector(".cardButtonOpen"); //button
const buttonClose = document.querySelector(".cardModule_buttonClose"); // button close
const buttonChoose = document.querySelector(".cardModule_buttonChoose"); //button choose
const cardModule = document.querySelector(".cardModule");
let cheacked = dataCard[0];
let newCard = [];

function cardRender() {
  for (let i = 0; i < dataCard.length; i++) {
    let div = document.createElement("div");
    div.classList.add("cardModule_boxCard_card");
    div.id = dataCard[i].id;
    div.innerHTML = `<label class="cardModule_boxCard_card_label">
    <input
      type="radio"
      class="cardModule_boxCard_card_input"
      name="radioCard"
      id=${dataCard[i].id}
    />
    <span class="cardModule_boxCard_card_span"></span>
    <img src=${dataCard[i].cardImg} />
    <p class="cardModule_boxCard_card_p">${dataCard[i].number}</p>
  </label> `;
    cardModuleCards.appendChild(div);
  }
}
// ======================================= create card module

let cardModuleCards = document.querySelector(".cardModule_cards");
let cardBox = document.querySelector(".payment__cardBox");
let cardResult = document.querySelector(".result__main_payment_boxCard_card");

function creatCards() {
  cardBox.innerHTML = `<img src=${dataCard[0].cardImg} alt="mir card" class="payment__cardBox_img" />
  <p class="payment__cardBox_numberCard">${dataCard[0].number}</p>
  <p class="payment__cardBox_dateCard">${dataCard[0].date}</p>
  <p class="payment__cardBox_textInform">
  Спишем оплату c карты при получении
  </p>`;

  cardResult.innerHTML = `<img src=${dataCard[0].cardImg} alt="mir card" class="payment__cardBox_img" />
  <p class="payment__cardBox_numberCard">${dataCard[0].number}</p>`;
}

// =========================================================================== box with card - button

const openCardBox = function () {
  newCard = [];
  forModuleBox.classList.add("block");
  cardModule.classList.remove("cardHidden");
};

cardButton.addEventListener("click", openCardBox);

const closeCardBox = function () {
  forModuleBox.classList.remove("block");
  cardModule.classList.add("cardHidden");
  cardBox = document.querySelector(
    ".payment__cardBox"
  ).innerHTML = `<img src=${newCard[0].cardImg} alt="mir card" class="payment__cardBox_img" />
 <p class="payment__cardBox_numberCard">${newCard[0].number}</p>
   <p class="payment__cardBox_dateCard">${newCard[0].date}</p>
   <p class="payment__cardBox_textInform">
 Спишем оплату c карты при получении
  </p>`;
  cardResult = document.querySelector(
    ".result__main_payment_boxCard_card"
  ).innerHTML = `<img src=${newCard[0].cardImg} alt="mir card" class="payment__cardBox_img" />
  <p class="payment__cardBox_numberCard">${newCard[0].number}</p>`;
};

buttonClose.addEventListener("click", closeCardBox);
buttonChoose.addEventListener("click", closeCardBox);

// =========================================================================== box with card -pencil
const cardButtonPencil = document.querySelector(".cardButtonPencilOpen"); //pencil

const openCardBoxPencil = function () {
  newCard = [];
  forModuleBox.classList.add("block");
  cardModule.classList.remove("cardHidden");
};

cardButtonPencil.addEventListener("click", openCardBoxPencil);

cardRender();
creatCards();

const elem = document.querySelectorAll(".cardModule_boxCard_card_input");
const elemId = elem[0].id;
if (elemId == dataCard[0].id) {
  elem[0].checked = true;
}

let newDiv = document.querySelector(".cardModule_cards");
newDiv.addEventListener("click", (event) => {
  for (let i = 0; i < dataCard.length; i++) {
    if (dataCard[i].id === event.target.id) {
      newCard.pop();
      newCard.push(dataCard[i]);
    }
  }
});
