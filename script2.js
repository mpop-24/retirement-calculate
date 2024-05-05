const money = document.getElementById("m");
const years = document.getElementById("y")
const button = document.getElementById("button");
const saved = document.getElementById("p")
const text = document.getElementById("text");
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
button.addEventListener("click", function(event) {
    needed(event)
});
function needed(e){
    e.preventDefault();
    try {
        const m = parseInt(money.value);
        const n = parseInt(years.value)
        const p = parseInt(saved.value)
        const i = 8/100
       const final = m * 12.5
       const one = i/12
       const two = 1 + one
       const three = n*12
       const four = two ** three
       const five = p * four
       const six = final - five
       const seven = six * one
       const eight = four - 1
       const nine = seven / eight
       let R = nine
        function formatNumberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (R < 0){
            R = 0
        }
        else{
            R = nine
        }
        const num = final.toFixed(0);
        const num1 = R.toFixed(0)
        text.innerText = `If you invest in S&P 500, at retirement you will need: $${formatNumberWithCommas(num)}`;
        text2.innerText  = `To achieve this, you will need to save $${formatNumberWithCommas(num1)} per month.`
        //text3.innerText = '*Disclaimer:'
    } catch (error) {
        console.error(error);
    }
}