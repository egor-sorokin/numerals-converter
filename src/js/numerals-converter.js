const errorClass = 'error';
const buttonSelectorClass = '.js-button';
const inputSelectorClass = '.js-input';
const outputSelectorClass = '.js-output';
const errorMessage = 'Enter Roman Numerals "IVXLCDM"';
const mapRomanArabicNumerals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};


class NumeralsConverter {
  constructor() {
    this.getDomSelectors();

    if (_isDOMSelector(this.button, buttonSelectorClass)
      && _isDOMSelector(this.input, inputSelectorClass)
      && _isDOMSelector(this.output, outputSelectorClass)) {

      this.render();
    }
  }


  getDomSelectors() {
    this.button = document.querySelector(buttonSelectorClass);
    this.input = document.querySelector(inputSelectorClass);
    this.output = document.querySelector(outputSelectorClass);
  }


  addListeners() {
    this.button.addEventListener('click', this.romanToArabic.bind(this));
  }


  prepareData() {
    const value = this.input.value.replace(/[, ]+/g, '').trim();
    const len = value.length - 1;

    if (this.output.classList.contains(errorClass)) {
      this.output.classList.remove(errorClass);
    }

    if (!this.isValidInput(value, len)) {
      this.output.classList.add(errorClass);
      this.output.innerText = errorMessage;

      return false;
    }

    return {
      value,
      len
    };
  }


  romanToArabic(e) {
    e.preventDefault();

    const data = this.prepareData();
    let result = 0;

    for (let i = 0; i < data.len; i++) {
      if (mapRomanArabicNumerals[data.value.charAt(i)] < mapRomanArabicNumerals[data.value.charAt(i + 1)]) {
        result -= mapRomanArabicNumerals[data.value.charAt(i)];
      } else {
        result += mapRomanArabicNumerals[data.value.charAt(i)];
      }
    }

    this.output.innerText = result + mapRomanArabicNumerals[data.value.charAt(data.len)];
  }


  isValidInput(value, len) {
    if (!value) {
      return false;
    }

    for (let i = 0; i <= len; i++) {
      let symbol = value.charAt(i);

      if (!mapRomanArabicNumerals.hasOwnProperty(symbol)) {
        return false;
      }
    }

    return true;
  }

  render() {
    this.addListeners();
  }
}

new NumeralsConverter();
