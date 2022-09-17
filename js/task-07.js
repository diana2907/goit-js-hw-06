// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// function changeFontSize() {
//   for (
//     let i = input.getAttribute("min");
//     i <= input.getAttribute("max");
//     i += 1
//   ) {
//     text.style.fontSize = i;
//   }
// }

// input.addEventListener("input", changeFontSize);
