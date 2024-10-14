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
    const r = (R / 12) / 100
    let n = Math.log(m / (m - p * r)) / Math.log(1 + r);
    function getMonthAndYear(months) {
        const currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();
        currentMonth += months;
        currentYear += Math.floor(currentMonth / 12);
        currentMonth = currentMonth % 12;
        return {
          month: Math.round(currentMonth + 1),
          year: currentYear
        };
      }
      const futureDate = getMonthAndYear(n);
      function monthName(month){
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];
      }
      text.innerText = `At this rate you will pay off your loan in ${monthName(futureDate.month)} of ${futureDate.year}`;
}
