const monthly = document.getElementById("m");
const principal = document.getElementById("p")
const button = document.getElementById("button");
const rate = document.getElementById("r")
const text = document.getElementById("text");
button.addEventListener("click", function(event) {
    needed(event)
});
function needed(e){
    e.preventDefault();
    const m = parseInt(monthly.value);
    const R = parseInt(rate.value)
    const p = parseInt(principal.value)
    const r = (R/12)/100
    let n = Math.log(m / (m - p * r)) / Math.log(1 + r);
    text.innerText = `You have ${Math.round(n)} months remaining`

}