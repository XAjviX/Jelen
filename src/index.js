const zegarElement = document.querySelector("#zegar");
const sarnaElement = document.querySelector(".obrazekSarna");
let czasNaStronie = 0;

setInterval(() => {
  if (czasNaStronie % 2 === 0) {
    zegarElement.innerHTML = czasNaStronie;
    sarnaElement.style.display = "block";
  } else {
    zegarElement.innerHTML = "kappa";
    sarnaElement.style.display = "none";
  }
  czasNaStronie++;
}, 1000);
