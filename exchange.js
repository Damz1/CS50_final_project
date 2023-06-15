require("dotenv").config();

document.addEventListener("DOMContentLoaded", () => {
  const amount = document.getElementById("amount");
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const convertButton = document.querySelector("button[type='submit']");
  const result = document.getElementById("result");

  const apiKey = process.env.API_KEY;

  convertButton.addEventListener("click", (event) => {
    event.preventDefault();

    const amountValue = parseFloat(amount.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?want=${toCurrencyValue}&have=${fromCurrencyValue}&amount=${amountValue}`;

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
});
