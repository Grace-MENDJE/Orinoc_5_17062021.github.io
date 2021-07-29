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
let prix = document.querySelector("#prixtotal");
// console.log(prix);

let prixTotal = 0;
teddies.forEach((doudou) => {
  prixTotal = prixTotal + doudou.price;
});
prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${prixTotal}€</span>`;

//Pour supprimer l'article sur l'interface
let effacer = document.querySelectorAll(".delete");
// console.log(effacer);
for (let l = 0; l < effacer.length; l++) {
  effacer[l].addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.parentNode.parentNode);
    //Selection de l'image du produit qui va nous permettre de supprimer le produit en cliquant sur le bouton.

    event.target.parentNode.parentNode.remove();
    //   alert('voulez-vous vraiment supprimer ce Produit ?')
    //Pour elenver le pris du produits ajouter

    teddies.forEach((teddy) => {
      resultat = prixTotal - teddy.price;
      console.log("coooooooooooooooooooooooool" + "" + "" + resultat);
    });
    prix.innerHTML = `Total de la commande : <span class="fw-bold text-danger">${resultat}€</span>`;
  });
}

// document.querySelector('.delete').addEventListener("click", (e) => {
//     e.preventDefault();
//     if(effacer.classList.contains('delete')){
//                 effacer.parentElement.parentElement.remove();

//                 // sessionStorage.removeItem('teddies[i]');
//     }

// });
