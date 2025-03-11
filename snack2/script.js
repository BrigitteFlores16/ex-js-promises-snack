//Snack 2
//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6.
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isStuck = Math.random() < 0.2;
      if (isStuck) {
        reject(" è incastrato!");
      } else {
        const numero = Math.floor(Math.random() * 6) + 1;
        resolve(numero);
      }
    }, 3000);
  });
}
lanciaDado(1)
  .then((numero) => console.log("Hai lanciato:", numero))
  .catch((error) => console.log(error));

//🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
//Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato.
// Se il numero esce due volte di fila, stampa "Incredibile!".
function creaLanciaDado() {
  let ultimoRisultato = null;

  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isStuck = Math.random() < 0.2;
        if (isStuck) {
          reject("è incastrato!");
        } else {
          const numero = Math.floor(Math.random() * 6) + 1;

          if (numero === ultimoRisultato) {
            console.log("Incredibile! Hai lanciato di nuovo:", numero);
          } else {
            console.log("Risultato:", numero);
          }

          ultimoRisultato = numero;
          resolve(numero);
        }
      }, 3000);
    });
  };
}

const lanciaDadoConMemoria = creaLanciaDado();

lanciaDadoConMemoria()
  .then((numero) => {})
  .catch((error) => console.log(error));

lanciaDadoConMemoria()
  .then((numero) => {})
  .catch((error) => console.log(error));
