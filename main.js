const salary = document.querySelector("#salary");
const month_sales = document.querySelector("#month-sales");
const extra_time = document.querySelector("#extra-time");
const chairs = document.querySelector("#chairs");
const btn = document.querySelector(".btn");
const percentage = document.querySelector("#percentage");
const message = document.querySelector(".message");
const inputs = Array.from(document.querySelectorAll(".container .row input"));
const yourCommission = document.querySelector(".total-com span");
let yourExtraTime = document.querySelector(".total-time span");
let totalChairs = document.querySelector(".total-chairs span");
let total = document.querySelector(".total-result span");
btn.addEventListener("click", function (e) {
  e.preventDefault();

let isValid = true;
message.textContent = "";

inputs.forEach((input) => {
  input.classList.remove("error");

  if (input.value === "") {
    isValid = false;
    input.classList.add("error");
    message.textContent = "All fields are required ❗";
  } else if (Number(input.value) < 0) {
    isValid = false;
    input.classList.add("error");
    message.textContent = "Values cannot be negative ❗";
  }
});


  if (isValid) {
    message.innerHTML = "";
    calculation();
  }
});

function calculation() {
  const sal = Number(salary.value);
  const tSales = Number(month_sales.value);
  const exTime = Number(extra_time.value);
  const numChairs = Number(chairs.value);
  const per = Number(percentage.value.replace("%", "")) / 100;

  const commission = Math.round((tSales - tSales * 0.16) * per * 100) / 100;

  const extraTime = Math.round((sal / 30 / 8) * 1.25 * exTime * 100) / 100;

  yourCommission.innerHTML = `${commission.toFixed(2)} JOD`;
  yourExtraTime.innerHTML = `${extraTime.toFixed(2)} JOD`;
  totalChairs.innerHTML = `${(numChairs * 10).toFixed(2)} JOD`;
  total.innerHTML = `${(commission + extraTime + numChairs * 10).toFixed(2)} JOD`;
}
