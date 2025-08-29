
// Variables

let copyCount = parseInt(document.getElementById("copy-values").innerText);
let coin = 100;
let heartCount = 0;
let callHistory = [];

// DOM Elements
const copyCountEl = document.getElementById("copy-values");
const coinCountEl = document.getElementById("coins-reserve");
const heartCountEl = document.getElementById("heart-value");
const historyContainer = document.getElementById("history-container");

// Copy / Call / Heart বাটন
const copyButtons = document.getElementsByClassName("fa-copy");
const callButtons = document.getElementsByClassName("fa-phone");
const heartButtons = document.getElementsByClassName("heart-btn");

// Copy Function
function handleCopy(number) {
  // alert show
  alert("নম্বর কপি হয়েছে: " + number);

  // তারপর কপি হবে
  navigator.clipboard.writeText(number);

  // counter বাড়বে
  copyCount = copyCount + 1;
  copyCountEl.innerText = copyCount; // শুধু সংখ্যা show করবে, "Copy" HTML এ আগে থেকেই লেখা আছে
}

// Call Function
function handleCall(name, number) {
  if (coin >= 20) {
    coin = coin - 20;
    coinCountEl.innerText = coin;

    alert(" 📞 Calling " + name + " (" + number + ")");

    const timeNow = new Date().toLocaleTimeString();
    const newCall = { name: name, number: number, time: timeNow };
    callHistory.push(newCall);
    updateHistory();
  } else {
    alert(" ❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }
}

// Heart Function
function handleHeart() {
  heartCount = heartCount + 1;
  heartCountEl.innerText = heartCount;
}

// History Update Function
function updateHistory() {
  historyContainer.innerHTML = "";
  for (let i = 0; i < callHistory.length; i++) {
    const div = document.createElement("div");
    div.className = "bg-white shadow p-2 my-2 rounded";
    div.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <h2 class="font-semibold lg:text-sm">${callHistory[i].name}</h2>
          <p class="font-semibold text-gray-600 lg:text-sm">${callHistory[i].number}</p>
        </div>
        <div>
          <h2 class="font-semibold lg:text-sm">${callHistory[i].time}</h2>
        </div>
      </div>`;
    historyContainer.appendChild(div);
  }
}

// Event Listeners

// Copy Buttons
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].parentElement.parentElement.addEventListener(
    "click",
    function () {
      const card = copyButtons[i].closest(".card-main");
      const number = card.querySelector("h2.font-bold.text-4xl").innerText;
      handleCopy(number);
    }
  );
}

// Call Buttons
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].parentElement.parentElement.addEventListener(
    "click",
    function () {
      const card = callButtons[i].closest(".card-main");
      const name = card.querySelector("h2.font-bold.text-xl").innerText;
      const number = card.querySelector("h2.font-bold.text-4xl").innerText;
      handleCall(name, number);
    }
  );
}

// Heart Buttons
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    handleHeart();
  });
}

// Clear History Button
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function () {
  callHistory = []; // সব history মুছে ফেলেছি
  updateHistory(); // UI আবার খালি করে দিল
});
