const inputs = [
  { id: "firstName", errorClass: ".error-name", regex: /[A-zА-Яа-я\-]/ },
  { id: "surname", errorClass: ".error-surname", regex: /[A-zА-Яа-я\-]/ },
  {
    id: "email",
    errorClass: ".error-email",
    regex: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/,
  },
  {
    id: "phone-form",
    errorClass: ".error-phone",
  },
  {
    id: "inn",
    errorClass: ".error-inn",
  },
];
const orderButton = document.querySelector(".result_box-button_button");
const formRecipent = document.querySelector("#formRecipent");
const form = document.querySelector("#form");

function validateForm(input) {
  const inputElement = document.querySelector(`#${input.id}`);
  const errorElement = document.querySelector(input.errorClass);
  const value = inputElement.value.trim();
  if (value.length === 0 || inputElement.classList.contains("error-input")) {
    errorElement.classList.add("error");
    errorElement.classList.remove("hide");
    inputElement.classList.add("error-input");
    return false;
  } else {
    errorElement.classList.remove("error");
    errorElement.classList.add("hide");
    inputElement.classList.remove("error-input");
    return true;
  }
}

orderButton.addEventListener("click", function (e) {
  e.preventDefault();
  let hasError = false;
  inputs.forEach((item) => {
    if (!validateForm(item, item.regex)) {
      hasError = true;
    }
  });
  if (!hasError) {
    form.reset();
    alert("Успешно");
  } else {
    formRecipent.scrollIntoView();
  }
});

// =================================================================== Validate name, surname and email

const validateInput = (input, regex) => {
  const inputElement = document.querySelector(`#${input.id}`);
  const errorElement = document.querySelector(input.errorClass);
  const value = inputElement.value.trim();
  const isValidInput = regex.test(value);
  if (value.length !== 0 && !isValidInput) {
    errorElement.classList.add("error");
    errorElement.classList.remove("hide");
    inputElement.classList.add("error-input");
    return false;
  } else {
    errorElement.classList.remove("error");
    errorElement.classList.add("hide");
    inputElement.classList.remove("error-input");
    return true;
  }
};
form.addEventListener("click", (e) => {
  const inputElement = document.querySelector(`#${e.target.id}`);
  inputElement.addEventListener("focusout", function (e) {
    if (e.target.tagName === "INPUT") {
      let input = inputs.find((item) => item.id === e.target.id);
      validateInput(input, input.regex);
    }
  });
});

// =================================================================== phone Input
const phoneFormInputError = document.querySelector(".error-phone");
const phoneFormInput = document.querySelector("#phone-form");

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
    phoneFormInputError.classList.remove("hide");
    phoneFormInput.classList.add("error-input");
  } else {
    phoneFormInputError.classList.remove("error");
    phoneFormInputError.classList.add("hide");
    phoneFormInput.classList.remove("error-input");
  }
};
phoneFormInput.addEventListener("focusout", validatePhone);

// =================================================================== inn Input
const InnFormInput = document.querySelector("#inn");
const InnFormInputError = document.querySelector(".error-inn");
InnFormInput.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 14);
});
const validateInn = (event) => {
  const inputedInn = event.target.value;

  if (inputedInn.length === 0) {
    return;
  } else if (inputedInn.length !== 14) {
    InnFormInputError.classList.add("error");
    InnFormInputError.classList.remove("hide");
    InnFormInput.classList.add("error-input");
  } else {
    InnFormInputError.classList.remove("error");
    InnFormInputError.classList.add("hide");
    InnFormInput.classList.remove("error-input");
  }
};
InnFormInput.addEventListener("focusout", validateInn);
InnFormInput.addEventListener("keypress", function (evt) {
  if ((evt.which != 8 && evt.which != 0 && evt.which < 48) || evt.which > 57) {
    evt.preventDefault();
  }
});
