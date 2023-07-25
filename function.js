const body = document.querySelector("body");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");

function gradient() {
    body.style.background =`linear-gradient(to right, ${first.value}, ${second.value}, ${third.value}, ${fourth.value})` 
}

first.addEventListener("input", gradient);
second.addEventListener("input", gradient);
third.addEventListener("input", gradient);
fourth.addEventListener("input", gradient);