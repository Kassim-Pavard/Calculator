const buttons = document.querySelectorAll('input[type="button"]');
const display = document.querySelector("#display");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    switch (this.value) {
      case "AC":
        // clear display
        display.value = "";
        break;
      case "DE":
        // delete last digit
        display.value = display.value.toString().slice(0, -1);
        break;
      case "=":
        try {
          // eval to calculate
          display.value = eval(display.value);
        } catch (error) {
          // error case
          display.value = "Error";
        }
        break;
      default:
        // add the button value next to the value already on display
        display.value += this.value;
    }
  });
});
