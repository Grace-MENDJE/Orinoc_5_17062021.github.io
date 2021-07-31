const teddies = JSON.parse(localStorage.getItem("teddies"));
let effacer = document.querySelectorAll(".delete");
console.log(teddies);

const list = document.querySelector("#article-liste");
teddies.forEach((teddy) => {
  list.innerHTML += `
            <tr class="article">
                <td>${teddy.title}</td>
                <td><img class="photo-panier" src="${teddy.image}" alt="Poto de l'article"></td>
                <td>${teddy.color}</td>
                <td>${teddy.price}€</td>
                <td><a href="#" class="btn btn-warning btn-sm delete">X</a></td>            
            </tr>
            `;
});

// Pour calculer la somme des prix
function somme() {
  let prixTotal = 0;
  teddies.forEach((doudou) => {
    prixTotal += doudou.price;
  });
  let prix = document.querySelector("#prixtotal");
  // console.log(prix);
  prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${prixTotal}€</span>`;
}
somme();

function removeProduct(id) {
  teddies.forEach((teddy, index) => {
    console.log(`teddy value from the local storage :: ====> ${teddy}`);
    if (teddy.id === id) {
      teddies.splice(index, 1);
      console.log(`valeur de l'index de l'object defini ::::::: ===> ${index}`);
      //Pour supprimer dans le localStorage
      localStorage.setItem("teddies", JSON.stringify(teddies));
      window.location.reload();
    }
  });
}

/**
 * splice(start, 1)
 */

//Pour supprimer l'article sur l'interface
let effacer = document.querySelectorAll(".delete");
// console.log(effacer);
for (let i = 0; i < effacer.length; i++) {
  effacer[i].addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.remove();
    //   alert('voulez-vous vraiment supprimer ce Produit ?')
    //Pour elenver le pris du produits ajoutern removeProduct();
    removeProduct(id);
  });
}
