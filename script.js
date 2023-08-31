


const api = "http://api.exchangeratesapi.io/v1/latest?access_key=1387c0455c16da48fbc01ee254f6aae5";


let search = document.querySelector("#amount");
let convert = document.querySelector("#convertBtn");
let fromCurrency = document.querySelector("#from");
let toCurrency = document.querySelector("#to");
let convertedAmount = document.querySelector("#convertedAmount");

let resultFrom;
let resultTo;
let searchValue;


fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);


function updateValue(e) {
    searchValue = e.target.value;
}


convert.addEventListener("click", getResults);

function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}


function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
   
    convertedAmount.innerHTML="The amount after conversion is: "  +((toRate / fromRate) * searchValue).toFixed(2)+resultTo;
}


document.querySelector("#resetBtn").addEventListener("click", clearVal);


function clearVal() {
    window.location.reload();
    convertedAmount.innerHTML = "";
}