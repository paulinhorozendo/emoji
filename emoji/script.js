const btn = document.querySelector("#emoji");

const emojis = [
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คฃ",
  "๐ซ",
  "๐ช",
  "๐",
  "๐",
  "๐คฉ",
  "๐",
  "๐",
  "๐ค",
  "๐ค",
  "๐ฅบ",
  "๐",
  "๐",
  "๐ค",
  "๐",
  "๐คจ",
  "๐",
];

btn.addEventListener("mouseover", () => {
  btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
