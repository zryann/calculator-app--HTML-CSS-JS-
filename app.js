const clear = document.querySelector("#clear");
const erase = document.querySelector("#erase");
const evaluate = document.querySelector("#evaluate");
const currentInput = document.querySelector(".currentInput");
const answer = document.querySelector(".answer");
const buttons = document.querySelectorAll("button");
let screenValue = [];

//Clear everything..
clear.addEventListener("click", () => {
  screenValue = [""];
  answer.innerHTML = 0;
  currentInput.className = "currentInput";
  answer.className = "answer";
  answer.style.color = "rgba(150, 150, 150, 0.87)";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //If the button is numbers or operators
    if (!btn.id.match("erase")) {
      //displaying values while pressing buttons
      screenValue.push(btn.value);
      currentInput.innerHTML = screenValue.join("");

      //calculating in live
      if (btn.classList.contains("num-btn")) {
        answer.innerHTML = eval(screenValue.join(""));
      }
    }
    // When erase button is clicked to just delete last value that typed
    if (btn.id.match("erase")) {
      screenValue.pop();
      currentInput.innerHTML = screenValue.join("");
      answer.innerHTML = eval(screenValue.join(""));
    }

    //calculating answer while clicking on = button
    if (btn.id.match("evaluate")) {
      currentInput.className = "answer";
      answer.className = "currentInput";
      answer.style.color = "white";
    }

    //avoid to display undefined on the screen
    if (typeof eval(screenValue.join("")) == "undefined") {
      answer.innerHTML = 0;
    }
  });
});
