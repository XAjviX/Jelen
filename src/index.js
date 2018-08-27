const zegarElement = document.querySelector("#zegar");
let czasNaStronie = 0;

setInterval(() => {
  zegarElement.innerHTML = czasNaStronie;
  czasNaStronie++;
}, 1000);
