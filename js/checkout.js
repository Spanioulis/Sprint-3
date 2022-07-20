// Exercise 7

function validate() {
  let error = 0;
  // Get the input fields
  let fName = document.getElementById("fName").value;
  let fEmail = document.getElementById("fEmail").value;
  let fAddress = document.getElementById("fAddress").value;
  let fLastN = document.getElementById("fLastN").value;
  let fPassword = document.getElementById("fPassword").value;
  let fPhone = document.getElementById("fPhone").value;

  // Validate fields entered by the user: name, phone, password, and email

  // TODO: Optimizar código (color letra validación, misma condición "No vacío, mínimo 3 caracteres")

  if (fName === "" || fName.length < 3 || !/^[A-Z]+$/i.test(fName)) {
    error++;
    document.getElementById(
      "errorName"
    ).innerHTML = `This field is required and must have, at
    least, 3
    character`;
    document.getElementById("fName").style.border = "2px ridge red";
    errorName.style.color = "#ad0d0d";
    document.getElementById("fName").focus();
  } else {
    document.getElementById("errorName").innerHTML = `Validated information`;
    document.getElementById("fName").style.border = "2px dashed green";
    errorName.style.color = "#1D5829";
  }

  if (fLastN === "" || fLastN.length < 3 || !/^[A-Z]+$/i.test(fLastN)) {
    error++;
    document.getElementById(
      "errorLastN"
    ).innerHTML = `This field is required and must have, at least,
    3 characters`;
    document.getElementById("fLastN").style.border = "2px ridge red";
    errorLastN.style.color = "#ad0d0d";
    document.getElementById("fLastN").focus();
  } else {
    document.getElementById("errorLastN").innerHTML = `Validated information`;
    document.getElementById("fLastN").style.border = "2px dashed green";
    errorLastN.style.color = "#1D5829";
  }

  if (fAddress === "" || fAddress.length < 3) {
    error++;
    document.getElementById(
      "errorAddress"
    ).innerHTML = `This field is required and must have, at least,
    3 characters`;
    document.getElementById("fAddress").style.border = "2px ridge red";
    errorAddress.style.color = "#ad0d0d";
    document.getElementById("fAddress").focus();
  } else {
    document.getElementById("errorAddress").innerHTML = `Validated information`;
    document.getElementById("fAddress").style.border = "2px dashed green";
    errorAddress.style.color = "#1D5829";
  }

  if (fEmail === "" || fEmail.length < 3 || !/\S+@\S+\.\S+/.test(fEmail)) {
    error++;
    document.getElementById(
      "errorEmail"
    ).innerHTML = `His field is required and must contain an '@' and
    have, at
    least, 3 characters`;
    document.getElementById("fEmail").style.border = "2px ridge red";
    errorEmail.style.color = "#ad0d0d";
    document.getElementById("fEmail").focus();
  } else {
    document.getElementById("errorEmail").innerHTML = `Validated information`;
    document.getElementById("fEmail").style.border = "2px dashed green";
    errorEmail.style.color = "#1D5829";
  }

  if (
    fPassword === "" ||
    fPassword.length < 3 ||
    /^[A-Z]+$/i.test(fPassword) ||
    /^([0-9])+$/i.test(fPassword)
  ) {
    error++;
    document.getElementById(
      "errorPassword"
    ).innerHTML = `Enter a password containing numbers and letters`;
    document.getElementById("fPassword").style.border = "2px ridge red";
    errorPassword.style.color = "#ad0d0d";
    document.getElementById("fPassword").focus();
  } else {
    document.getElementById(
      "errorPassword"
    ).innerHTML = `Validated information`;
    document.getElementById("fPassword").style.border = "2px dashed green";
    errorPassword.style.color = "#1D5829";
  }

  if (fPhone === "" || fPhone.length != 9 || !/^([0-9])*$/.test(fPhone)) {
    error++;
    document.getElementById(
      "errorPhone"
    ).innerHTML = `Invalid phone number!! Must be 9 digits with no
    letters`;
    document.getElementById("fPhone").style.border = "2px ridge red";
    errorPhone.style.color = "#ad0d0d";
    document.getElementById("fPhone").focus();
  } else {
    document.getElementById("errorPhone").innerHTML = `Validated information`;
    document.getElementById("fPhone").style.border = "2px dashed green";
    errorPhone.style.color = "#1D5829";
  }

  if (error > 0) {
    document.getElementById(
      "errorMessage"
    ).innerHTML = `The fields marked in red are incorrect and/or incomplete.`;
    errorMessage.style.color = "#7A2A29";
  } else {
    document.getElementById(
      "errorMessage"
    ).innerHTML = `All fields have been filled in correctly. Sending information...`;
    errorMessage.style.color = "#1D5833";
  }
}

mostrarPassword = () => {
  let fPassword = document.getElementById("fPassword");

  if (fPassword.type == "password") {
    fPassword.type = "text";
  } else {
    fPassword.type = "password";
  }
};
