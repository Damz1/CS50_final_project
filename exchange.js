import { apiKey } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const amount = document.getElementById("amount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertButton = document.querySelector("button[type='submit']");
  const switchButton = document.getElementById("switch");
  const result = document.getElementById("result");
  const addCoin = document.getElementById("addCoinForm");

  convertButton.addEventListener("click", (event) => {
    event.preventDefault();

    const amountValue = parseFloat(amount.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?want=${toCurrencyValue}&have=${fromCurrencyValue}&amount=${amountValue}`;

    result.innerHTML = "Loading...";

    fetch(apiUrl, {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        result.innerHTML = `${data.old_amount} ${
          data.old_currency
        } = ${data.new_amount.toFixed(2)} ${data.new_currency}`;
      })
      .catch((err) => {
        console.log("Request failed: ", err);
        result.innerHTML = "An error occurred. Please try again later.";
      });
  });

  switchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
  });

  const currencyInput = document.getElementById("currency-input");
  currencyInput.addEventListener("input", () => {
    const enteredText = this.value.toUpperCase();
    const suggestions = currencies.filter((currency) => {
      return (
        currency.symbol.startsWith(enteredText) ||
        currency.name.toUpperCase().includes(enteredText)
      );
    });

    // Clear the previous suggestions
    while (currencyInput.nextElementSibling) {
      currencyInput.nextElementSibling.remove();
    }

    // Add the new suggestions
    suggestions.forEach((currency) => {
      const option = document.createElement("div");
      option.textContent = `${currency.symbol} - ${currency.name}`;
      option.addEventListener("click", function () {
        currencyInput.value = currency.symbol;
        this.parentNode.remove();
      });
      currencyInput.parentNode.appendChild(option);
    });
  });
});
