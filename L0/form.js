// =================================================================== Name Input
const userFormInputNameError = document.querySelector(".errorName");
const userFormInputName = document.querySelector("#firstName");

const validateName = (event) => {
  const inputedName = event.target.value;
  const nameRegExp = /[A-zА-Яа-я\-]/;
  const isValidName = nameRegExp.test(inputedName);

  if (inputedName.length !== 0 && !isValidName) {
    userFormInputNameError.classList.add("error");
    userFormInputName.classList.add("errorInput");
  } else {
    userFormInputNameError.classList.remove("error");
    userFormInputName.classList.remove("errorInput");
  }
  // userFormInputName
};
userFormInputName.addEventListener("focusout", validateName);
// =================================================================== Surname Input
const surnameFormInputError = document.querySelector(".errorSurname");
const surnameFormInput = document.querySelector("#surname");

const validateSurname = (event) => {
  const inputedSurname = event.target.value;
  const surnameRegExp = /[A-zА-Яа-я\-]/;
  const isValidSurName = surnameRegExp.test(inputedSurname);
  if (inputedSurname.length !== 0 && !isValidSurName) {
    surnameFormInputError.classList.add("error");
    surnameFormInput.classList.add("errorInput");
  } else {
    surnameFormInputError.classList.remove("error");
    surnameFormInput.classList.remove("errorInput");
  }
  // userFormInputName
};
surnameFormInput.addEventListener("focusout", validateSurname);
// =================================================================== email Input
const emailFormInputError = document.querySelector(".errorEmail");
const emailFormInput = document.querySelector("#email");

const validateEmail = (event) => {
  const inputedEmail = event.target.value;
  const emailRegExp = /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/;
  const isValidEmail = emailRegExp.test(inputedEmail);

  if (inputedEmail.length !== 0 && !isValidEmail) {
    emailFormInputError.classList.add("error");
    emailFormInputError.classList.remove("errorEmail");
    emailFormInput.classList.add("errorInput");
  } else {
    emailFormInputError.classList.remove("error");
    emailFormInputError.classList.add("errorEmail");
    emailFormInput.classList.remove("errorInput");
  }
};
emailFormInput.addEventListener("onchange", validateEmail);
emailFormInput.addEventListener("focusout", validateEmail);
// =================================================================== phone Input
const phoneFormInputError = document.querySelector(".errorPhone");
const phoneFormInput = document.querySelector("#phone");

var eventCalllback = function (e) {
  var el = e.target,
    clearVal = el.dataset.phoneClear,
    pattern = el.dataset.phonePattern,
    matrix_def = "+7 ___ ___-__-__",
    matrix = pattern ? pattern : matrix_def,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = e.target.value.replace(/\D/g, "");
  if (clearVal !== "false" && e.type === "blur") {
    if (val.length < matrix.match(/([\_\d])/g).length) {
      return;
    }
  }
  if (def.length >= val.length) val = def;
  e.target.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ""
      : a;
  });
};
var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
for (let elem of phone_inputs) {
  for (let ev of ["input", "blur", "focus"]) {
    elem.addEventListener(ev, eventCalllback);
  }
}

const validatePhone = (event) => {
  const inputedPhone = event.target.value;
  if (inputedPhone.length === 0) {
    return;
  } else if (inputedPhone.length !== 16) {
    phoneFormInputError.classList.add("error");
    phoneFormInputError.classList.remove("errorPhone");
    phoneFormInput.classList.add("errorInput");
  } else {
    phoneFormInputError.classList.remove("error");
    phoneFormInputError.classList.add("errorPhone");
    phoneFormInput.classList.remove("errorInput");
  }
};
phoneFormInput.addEventListener("focusout", validatePhone);

// =================================================================== inn Input
const InnFormInputError = document.querySelector(".errorInn");
const InnFormInput = document.querySelector("#inn");

const validateInn = (event) => {
  const inputedInn = event.target.value;

  if (inputedInn.length === 0) {
    return;
  } else if (inputedInn.length !== 14) {
    InnFormInputError.classList.add("error");
    InnFormInputError.classList.remove("errorInn");
    InnFormInput.classList.add("errorInput");
  } else {
    InnFormInputError.classList.remove("error");
    InnFormInputError.classList.add("errorInn");
    InnFormInput.classList.remove("errorInput");
  }
};
InnFormInput.addEventListener("focusout", validateInn);
InnFormInput.addEventListener("keypress", function (evt) {
  if ((evt.which != 8 && evt.which != 0 && evt.which < 48) || evt.which > 57) {
    evt.preventDefault();
  }
});
// =================================================================== order button

const orderButton = document.querySelector(".result_boxButton_button");
const formRecipent = document.querySelector("#formRecipent");

const form = document.querySelector("#form");
function checkForm(e) {
  e.preventDefault();
  let inputedInn = document.querySelector("#inn").value;
  let inputedPhone = document.querySelector("#phone").value;
  let inputedEmail = document.querySelector("#email").value;
  let inputedName = document.querySelector("#firstName").value;
  let inputedSurname = document.querySelector("#surname").value;
  if (
    inputedInn.length === 0 ||
    inputedPhone.length === 0 ||
    inputedEmail.length === 0 ||
    inputedName.length === 0 ||
    inputedSurname.length === 0
  ) {
    InnFormInput.classList.toggle("errorInput");
    InnFormInputError.classList.toggle("error");
    phoneFormInput.classList.toggle("errorInput");
    phoneFormInputError.classList.toggle("error");
    emailFormInput.classList.toggle("errorInput");
    emailFormInputError.classList.toggle("error");
    surnameFormInput.classList.toggle("errorInput");
    surnameFormInputError.classList.toggle("error");
    userFormInputName.classList.toggle("errorInput");
    userFormInputNameError.classList.toggle("error");
    formRecipent.scrollIntoView();
    return;
  }

  document.querySelector("#inn").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#firstName").value = "";
  document.querySelector("#surname").value = "";

  alert("успешно");
}
orderButton.addEventListener("click", checkForm);
