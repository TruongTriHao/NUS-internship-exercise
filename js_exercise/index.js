const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
let calc = false;
button.forEach((btn) => {
  const text = btn.textContent;
  if (text === "=") {
    btn.addEventListener("click", () => {
      calc = true;
      display.textContent = eval(display.textContent);
    });
  } else {
    btn.addEventListener("click", () => {
      if (display.textContent === "0" || calc) {
        calc = false;
        display.textContent = text;
      } else display.textContent += text;
    });
  }
});
