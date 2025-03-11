//Snack 1
//Ottieni il titolo di un post con una Promise.
//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => {
          if (!response) {
            reject("errore del post!");
          }
          return response.json();
        })
        .then((post) => resolve(post.title))
        .catch((error) => reject("errore di rete: " + error));
    }, 2000);
  });
}
getPostTitle(1)
  .then((title) => console.log("Titolo del post:", title))
  .catch((error) => console.log(error));

//🎯 Bonus: Ottieni l'intero post con l'autore
//Crea una funzione getPost(id) che recupera l'intero post.
// Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
function getPost(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => {
          if (!response) {
            reject("errore  del post!");
          }
          return response.json();
        })
        .then((post) => {
          fetch(`https://dummyjson.com/users/${post.userId}`)
            .then((response) => {
              if (!response) {
                reject("errore dell'utente!");
              }
              return response.json();
            })
            .then((user) => {
              post.user = user;
              resolve(post);
            })
            .catch((error) => reject("errore (utente): " + error));
        })
        .catch((error) => reject("errore (post): " + error));
    }, 2000);
  });
}

getPost(1)
  .then((post) => console.log("Post completo:", post))
  .catch((error) => console.log(error));
