function convert() {
    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        RWF: 14136,
        NGN: 16136,
        GBP: 0.75
    };

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const resultDiv = document.getElementById("result");

    if (!amount || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
    }

    if (currencies[from] && currencies[to]) {
        const converted = (amount * currencies[to]) / currencies[from];
        resultDiv.textContent = `Converted Amount: ${converted.toFixed(2)} ${to}`;
    } else {
        resultDiv.textContent = "Currency not supported.";
    }
}
