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

const cardModule = document.querySelector(".card-module");
const cardModuleCards = document.querySelector(".card-module_cards");
const cardBox = document.querySelector(".payment__card-box");
const cardResult = document.querySelector(
  ".result__main_payment_box-card_card"
);
const cardButton = document.querySelector(".card-button-open");
const buttonClose = document.querySelector(".card-module_button-close");
const buttonChoose = document.querySelector(".card-module_button-choose");
const cardButtonPencil = document.querySelector(
  ".result__main_payment_box-card-button"
);
const inputChecked = document.querySelector(".card-module_box-card_card_input");
let selectedCard = dataCard[0];

function renderCard(card) {
  cardBox.innerHTML = `
  <img src="${card.cardImg}" alt="Card Image" class="payment__card-box_img" />
  <p class="payment__card-box_number-card">${card.number}</p>
  <p class="payment__card-box_date-card">${card.date}</p>
  <p class="payment__card-box_text-inform">Спишем оплату с карты при получении</p>`;

  cardResult.innerHTML = `
  <img src="${card.cardImg}" alt="Card Image" class="payment__card-box_img" />
  <p class="result__main_payment_box-card-p">${card.number}</p>`;
}

function moduleCard() {
  for (let i = 0; i < dataCard.length; i++) {
    let div = document.createElement("div");
    div.classList.add("card-module_box-card_card");
    div.id = dataCard[i].id;

    let inputChecked = "";
    if (dataCard[i] === selectedCard) {
      inputChecked = "checked";
    }

    div.innerHTML = `<label class="card-module_box-card_card_label">
        <input
          type="radio"
          class="card-module_box-card_card_input hide"
          name="radioCard"
          id=${dataCard[i].id}
          ${inputChecked}
        />
        <span class="card-module_box-card_card_span"></span>
        <img src=${dataCard[i].cardImg} />
        <p class="card-module_box-card_card_p">${dataCard[i].number}</p>
      </label> `;
    cardModuleCards.appendChild(div);
  }
}

function openCardModule() {
  cardModule.classList.remove("hide");
  forModuleBox.classList.add("block");
}

function chooseCardModule() {
  cardModule.classList.add("hide");
  forModuleBox.classList.remove("block");
  renderCard(selectedCard);
}

function selectCard(card) {
  selectedCard = card;
}

function cardModuleClickHandler(event) {
  const cardId = event.target.closest(".card-module_box-card_card").id;
  const card = dataCard.find((card) => card.id === cardId);
  console.log(card);
  if (card) {
    selectCard(card);
  }
}

cardButton.addEventListener("click", openCardModule);
buttonClose.addEventListener("click", function () {
  forModuleBox.classList.remove("block");
  cardModule.classList.add("hide");
});
buttonChoose.addEventListener("click", chooseCardModule);
cardButtonPencil.addEventListener("click", openCardModule);
cardModuleCards.addEventListener("click", cardModuleClickHandler);

function initialize() {
  renderCard(selectedCard);
  moduleCard();
}

initialize();
