"use strict";
window.addEventListener("DOMContentLoaded", start);
const elementInput = document.querySelector("#input");
const dropDown = document.querySelector("#list");
const elementOutput = document.querySelector("#output");
const btnActivate = document.querySelector("button");
let valueSelected;
let inputValue;
let newValue;

function start() {
  console.log("start");

  btnActivate.addEventListener("click", userOptions);
}

function userOptions() {
  valueSelected = dropDown.value;
  inputValue = elementInput.value;
  const firstName = inputValue.indexOf(" ");
  const lastName = inputValue.lastIndexOf(" ");

  console.log(inputValue);

  if (valueSelected == 1) {
    // 1. option
    console.log("option A");

    newValue = inputValue.toLowerCase();

    let characterOne = newValue.substring(0, 1);
    characterOne = characterOne.toUpperCase();

    let remainingName = newValue.substring(1, newValue.length);
    newValue = characterOne + remainingName;
  } else if (valueSelected == 2) {
    // 2. option
    console.log("option 2");

    newValue = inputValue.substring(0, firstName);
  } else if (valueSelected == 3) {
    // 3. option
    console.log("option 3");

    newValue = inputValue.substring(0, firstName);
    newValue = newValue.length;
  } else if (valueSelected == 4) {
    // 4. option
    console.log("option 4");

    newValue = inputValue.substring(firstName + 1, lastName);
  } else if (valueSelected == 5) {
    // 5. option
    console.log("option 5");

    if (inputValue.endsWith(".png")) {
      newValue = ".png";
    } else if (inputValue.endsWith(".jpg")) {
      newValue = ".jpg";
    }
  } else if (valueSelected == 6) {
    // 6. option
    console.log("option 6");

    newValue = inputValue.replace(inputValue, "*");
    newValue = newValue.repeat(inputValue.length);
  } else if (valueSelected == 7) {
    // 7. option
    console.log("option 7");

    let firstTwo = inputValue.substring(0, 2);
    let characterThree = inputValue[2].toUpperCase();
    let remainingName = inputValue.substring(3, inputValue.length);
    newValue = firstTwo + characterThree + remainingName;
  } else if (valueSelected == 8) {
    // 8. option
    console.log("option 8");
    newValue = "";

    if (inputValue.includes(" ")) {
      let capitalizeSpace = (inputValue = inputValue.split(" "));

      capitalizeSpace.forEach(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        console.log(word);
        newValue += word + " ";
      });
    } else if (inputValue.includes("-")) {
      let capitalizeHyphens = (inputValue = inputValue.split("-"));

      capitalizeHyphens.forEach(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        console.log(word);
        newValue += word + "-";
      });
    }
  }

  generateOutput();
}

function generateOutput() {
  console.log("generate output");

  elementOutput.value = newValue;
  console.log("generated output");
}

// event.preventDefault();

// elementInput.addEventListener("input", function(event) {});

// "input",
// function(event) {
//   // Only run for #wizard select
//   if (event.target.id !== "wizard") return;

//   if (event.target.value === "Harry Potter") {
//     alert("He's ok, I guess.");
//   }

//   if (event.target.value === "Hermione") {
//     alert("That is the correct the answer!");
//   }

//   if (event.target.value === "Voldemort") {
//     alert("You can leave now");
//   }
// },
