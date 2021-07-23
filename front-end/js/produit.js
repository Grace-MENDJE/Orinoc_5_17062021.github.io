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
                      <!--<option id="choixdelacouleur" class="CouleurduNournour" selected></option>--> 
                    </select>
                </div>
                 <p class="card-text h4">${doudou.description}</p>
                 <p class="card-text text-danger h3">${doudou.price / 100} €</p>
                 <a href="../../panier.html" class="btn btn-danger panier" role="button">Ajouter au panier</a>
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
      //storageElement : me permettra de sauvegarder tout les élément sous tableau 
      
      let storageElement = JSON.parse(localStorage.getItem("teddies"));
      if(storageElement=== null){
        storageElement = [];
      }
      console.log(storageElement);

      const teddies = {
        image: doudou.imageUrl,
        title: doudou.name,
        color: couleurArticle,
        price: doudou.price / 100,
      };

      //Pour rajouter teddies dans notre back up ou reserve de nos élémént
      storageElement.push(teddies);
      localStorage.setItem("teddies", JSON.stringify(storageElement));
      
    });

    
  });

 