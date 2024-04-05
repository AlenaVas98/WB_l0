const forModuleBox = document.querySelector(".forModule");

// =========================================================================== out of stock

const outOfStoke = document.querySelector(".notAvailable__main-box");
const outOfStokeDownBox = document.querySelector(".notAvailable__down-box");
const outOfStokeUpBox = document.querySelector(".notAvailable__up-box");
const outOfStokeOpenBtn = document.querySelector(
  ".notAvailable__up-box_btn-close"
);
const outOfStokeCloseBtn = document.querySelector(
  ".notAvailable__down-box_btn-open"
);

const modalOutOfStoke = function () {
  outOfStoke.classList.toggle("hide");
  outOfStokeUpBox.classList.toggle("hide");
  outOfStokeDownBox.classList.toggle("hide");
};
outOfStokeOpenBtn.addEventListener("click", modalOutOfStoke);
outOfStokeCloseBtn.addEventListener("click", modalOutOfStoke);
