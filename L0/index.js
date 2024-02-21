const forModuleBox = document.querySelector(".forModule");

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

const modalOutOfStoke = function () {
  outOfStoke.classList.toggle("cartHidden");
  outOfStokeUpBox.classList.toggle("cartHidden");
  outOfStokeDownBox.classList.toggle("cartHidden");
};
outOfStokeOpenBtn.addEventListener("click", modalOutOfStoke);
outOfStokeCloseBtn.addEventListener("click", modalOutOfStoke);
