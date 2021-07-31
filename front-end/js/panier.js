const teddies = JSON.parse(localStorage.getItem("teddies"));
console.log(teddies);

const list = document.querySelector("#article-liste");
teddies.forEach((teddy) => {
  list.innerHTML += `
            <tr class="article">
                <td>${teddy.title}</td>
                <td><img class="photo-panier" src="${teddy.image}" alt="Poto de l'article"></td>
                <td>${teddy.color}</td>
                <td>${teddy.price}€</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>            
            </tr>
            `;
});

// Pour calculer la somme des prix
function somme() {
  let prixTotal = 0;
  teddies.forEach((doudou) => {
    prixTotal = prixTotal + doudou.price;
  });
  let prix = document.querySelector("#prixtotal");
  // console.log(prix);
  prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${prixTotal}€</span>`;
}
somme();

// let prixTotal = 0;
// teddies.forEach((doudou) => {
//   prixTotal = prixTotal + doudou.price;
// });

//Pour supprimer l'article sur l'interface
let effacer = document.querySelectorAll(".delete");
// console.log(effacer);
for (let l = 0; l < effacer.length; l++) {
  effacer[l].addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.remove();
    //   alert('voulez-vous vraiment supprimer ce Produit ?')
    //Pour elenver le pris du produits ajouter

    function prixReduit() {
      teddies.forEach((teddy, index) => {
        if (teddy.title === teddy.title && teddy.color === teddy.color) {
          teddies.splice(index, 1);
          //Pour supprimer dans le localStorage
          localStorage.setItem("teddies", JSON.stringify(teddies));
          window.location.reload();
        }
      });
    }
    prixReduit();
    // teddies.forEach((teddy, index) => {
    //   if (teddy.title === teddy.title || teddy.color === teddy.color) {
    //     teddies.splice(index, 1);
    //     prixTotal = teddy.price;
    //   }
    // });

    // teddies.forEach((teddy) => {
    //   resultat = prixTotal - teddy.price;
    //   console.log("coooooooooooooooooooooooool" + "" + "" + resultat);
    // });
    // prix.innerHTML = `Total de la commande : <span class="fw-bold text-danger">${resultat}€</span>`;
  });
}

// document.querySelector('.delete').addEventListener("click", (e) => {
//     e.preventDefault();
//     if(effacer.classList.contains('delete')){
//                 effacer.parentElement.parentElement.remove();

//                 // sessionStorage.removeItem('teddies[i]');
//     }

// });
