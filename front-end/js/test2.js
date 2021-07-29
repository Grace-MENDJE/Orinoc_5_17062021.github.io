const nounours = document.getElementById("container");
console.log(nounours);
const url = window.location.href;
// console.log(url);
const id = url.split("=")[1];
console.log(id);
fetch(`http://localhost:3000/api/teddies/${id}`)
  .then((response) => response.json())
  .then((doudou) => {
    console.log(doudou);
    nounours.innerHTML += `<div class="card mb-10" >
           <div class="row g-0">
           <div class="col-md-6">
           <img src="${
             doudou.imageUrl
           }" class="img-fluid rounded-start" alt="Phote de nournours">
           </div>
             <div class="col-md-6">
                <div class="card-body">
                 <h3 class="card-title">${doudou.name}</h3>
                 <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Couleurs</label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option id="choixdelacouleur" class="CouleurduNournour" selected>Choisissez une couleur au choix...</option> 
                    </select>
                </div>
                 <p class="card-text h4">${doudou.description}</p>
                 <p class="card-text text-danger h3">${doudou.price / 100} €</p>
                 <a class="btn btn-danger panier" href="./panier.html" role="button">Ajouter au panier</a>
               </div>
             </div>
           </div>
        </div>`;

    let couleur = document.querySelector("select");
    doudou.colors.forEach((color) => {
      couleur.innerHTML += `<option value="${color}">${color}</option>`;
    });

    let erreur = document.getElementsByClassName("erreur");
    console.log(erreur);
    let couleurArticle = document.getElementsByClassName("couleurduproduit");
    console.log(couleurArticle);
    let btn = document.getElementsByClassName("panier");

    //Ici je crée un evenement pour recuperer la commande et le rajouter dans localStorage.
    document.querySelector(".panier").addEventListener("click", (e) => {
      e.preventDefault();
      let couleur = document.querySelector("select");
      let couleurArticle = couleur.value;

      const teddies = {
        image: doudou.imageUrl,
        title: doudou.name,
        color: couleurArticle,
        price: doudou.price / 100,
      };

      //Pour rajouter teddies dans notre back up ou reserve de nos élémént
      if (!localStorage.getItem("teddies")) {
        console.log("le panier est vide !!!");
        localStorage.setItem("teddies", JSON.stringify(teddies));
      } else {
        //storageElement : me permettra de sauvegarder tout les élément sous tableau
        let storageElement = new Array(teddies);
        storageElement = new Array(localStorage.getItem("teddies"));
        console.log(storageElement);
        //storageElement.split(", ")
        storageElement.push(teddies);
        console.log(storageElement);
        localStorage.setItem("teddies", JSON.stringify(storageElement));
        console.log("Nouveau produit ajouter dans le panier de l'utilisateur");
      }
    });
  });

























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

function AccrementationPrix(){
  let prixTotal = 0;
  teddies.forEach((doudou) => {
  prixTotal = prixTotal + doudou.price;
});
prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${prixTotal}€</span>`;
}
AccrementationPrix();

function DecrementationPrix(){
  let prixTotal = 0;
  teddies.forEach((doudou) => {
  prixTotal = prixTotal + doudou.price;
  let resultat = prixTotal;
  resultat = resultat - doudou.price;
  console.log(resultat);
});  
prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${resultat}€</span>`;
}
//Pour supprimer l'article sur l'interface
let effacer = document.querySelectorAll(".delete");
// console.log(effacer);
for (let l = 0; l < effacer.length; l++) {
  effacer[l].addEventListener("click", (event) => {
    event.preventDefault();
    //Selection de l'image du produit qui va nous permettre de supprimer le produit en cliquant sur le bouton.
    let suppressionDuProduit = teddies[l].image;
    // console.log(suppressionDuProduit);
    if (suppressionDuProduit != null) {
      DecrementationPrix();         
    }
    
  });
}
