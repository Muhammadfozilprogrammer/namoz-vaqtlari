const Form = document.querySelector("#Form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const time = document.querySelector("#times");
const tong = document.querySelector("#tong");
const quyosh = document.querySelector("#quyosh");
const peshin = document.querySelector("#peshin");
const asr = document.querySelector("#asr");
const shom = document.querySelector("#shom");
const xufton = document.querySelector("#xufton");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  let apiKey = "6b290b6d66bdcadb91913d71c51d257e";
  fetch(
    ` https://islomapi.uz/api/present/day?region=${input.value}&units=metric&appid${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      (tong.innerHTML = `${data.times.tong_saharlik}`),
        (quyosh.innerHTML = `${data.times.quyosh}`),
        (peshin.innerHTML = `${data.times.peshin}`),
        (asr.innerHTML = `${data.times.asr}`),
        (shom.innerHTML = `${data.times.shom_iftor}`),
        (xufton.innerHTML = `${data.times.hufton}`);
    })
    .catch((error) => {});
});
