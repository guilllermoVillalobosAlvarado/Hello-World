import { NumericInput } from 'numeric-keyboard';

new NumericInput({
  type: "number",
  placeholder: "touch to input",
  onInput(value) {
    console.log(value);
  },
}).mount(".input");
