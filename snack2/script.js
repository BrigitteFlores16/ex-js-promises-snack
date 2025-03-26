//Snack 2
//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6.
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

/*function lanciaDado() {
  return new Promise((resolve, reject) => {
    console.log("Lancio il dado...");
    setTimeout(() => {
      const isStuck = Math.random() < 0.2;
      if (true) {
        reject(" è incastrato!");
      } else {
        const num = Math.floor(Math.random() * 6) + 1;
        resolve(num);
      }
    }, 3000);
  });
}
lanciaDado(1)
  .then((num) => console.log("Hai lanciato:", num))
  .catch((error) => console.log(error)); */

// Bonus: HOF con closure per memorizzare l'ultimo lancio
//Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato.
// Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado() {
  let ultimoRisultato = null;

  return function () {
    return new Promise((resolve, reject) => {
      console.log("Lancio il dado...");
      setTimeout(() => {
        if (false) {
          ultimoRisultato = null;
          reject("è incastrato!");
        } else {
          const num = 4;
          if (num === ultimoRisultato) {
            console.log("Incredibile!");
          }
          ultimoRisultato = num;
          resolve(num);
        }
      }, 3000);
    });
  };
}

const lanciaDadoConMemoria = creaLanciaDado();

lanciaDadoConMemoria()
  .then((num) => {
    console.log("Hai lanciato:", num);
    lanciaDadoConMemoria()
      .then((num) => console.log("Hai lanciato:", num))
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
