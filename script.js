// Values from form
const initialAmount = document.getElementById("initial-amount");
const years = document.getElementById("years");
const freq = document.getElementById("freq");
const rate = document.getElementById("rates");
const contribution = document.getElementById("contribution");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3")

// The calculate button
const button = document.querySelector(".input-group button");

// message
const text = document.getElementById("text");

// Attach an event listener 
button.addEventListener("click", function(event) {
    calculateGrowth(event);
    popUpText();
});

const data = [];
const labels = [];
let growth = 0;

function calculateGrowth(e) {
    e.preventDefault();
    data.length = 0;
    labels.length = 0;
    try {
        const initial = parseInt(initialAmount.value);
        let y = parseInt(years.value);
        let r = parseInt(rate.value);
        const c = parseInt(freq.value)
        const m = parseInt(contribution.value);
        r = r / 100
        for (let i = 0; i <= y; i++) {
            const final = (initial * (1+ (r/c)) ** (i*c)) + (m * ((1+(r/c)) ** (i*c) -1 ) / (r/c))
            data.push(final);
            labels.push("Year " + i);
            growth = final;
        }
        function formatNumberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        num1 = growth.toFixed(0)
        text.innerText = `You Will Have $${[formatNumberWithCommas(num1)]} When You Retire`
        text3.innerText = '*Disclaimer: This value is an estimate based on the average return rate you selected.'
        + '\nActual returns, and the amount you have at retirement, may vary.'
    } catch (error) {
        console.error(error);
    }

}
function popUpText() {
    text2.style.color = 'rgb(0, 0, 0)'; // Change 'red' to the desired color
}

