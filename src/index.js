const zegarElement = document.querySelector("#zegar");
const sarnaElement = document.querySelector(".obrazekSarna");
let czasNaStronie = 0;

setInterval(() => {
  // gdy czas na stronie podzielony przez 2 daje reszte 0
  if (czasNaStronie % 2 === 0) {
    //  to ustaw w zegarElemet html o tresci czas na stronie
    zegarElement.innerHTML = czasNaStronie;

    // ustaw tez styl display block dla obrazka
    // sarnaElement.style.display = "block";
  } else {
    // w innym wypadku
    // ustaw zegar na tresc kappa
    zegarElement.innerHTML = "kappa";
  }

  sarnaElement.classList.toggle("rozmazanaSarna");
  czasNaStronie++;
}, 1000);
