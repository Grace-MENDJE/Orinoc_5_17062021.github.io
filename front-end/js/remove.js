const teddies = JSON.parse(localStorage.getItem("teddies"));
//console.log(teddies);

const list = document.querySelector('#article-liste');
        teddies.forEach(teddy=> {
            list.innerHTML +=`
            <tr>
                <td>${teddy.title}</td>
                <td><img class="photo-panier" src="${teddy.image}" alt="Poto de l'article"></td>
                <td>${teddy.color}</td>
                <td>${teddy.price}€</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>            
            </tr>
            `    
        });




        // for(let i=0; i<localStorage.length; i++) {
        //     let key = localStorage.key(i);
        //     alert(`${key}: ${localStorage.getItem(key)}`);
        //   }
          let effacer = document.querySelectorAll(".delete");
          // console.log(effacer);
          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            addEventListener("click", (event) => {
              event.preventDefault();
              effacer[key] = this.localStorage.removeItem(key);
              //Selection de l'image du produit qui va nous permettre de supprimer le produit en cliquant sur le bouton.
              //let suppressionDuProduit = teddies[i].image;
              // console.log(suppressionDuProduit);
              /* if (suppressionDuProduit != null) {
                document.querySelector(".article").remove();
                alert('voulez-vous vraiment supprimer ce Produit ?')
                //Pour elenver le pris du produits ajouter
                let resultat = prixTotal;      
                teddies.forEach((teddy) => {
                  resultat -= teddy.price;
                  console.log('coooooooooooooooooooooooool'+''+''+resultat);
                }); */
                prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${resultat}€</span>`;     
              //}
              
            });          

let prix = document.querySelector('#prixtotal');
console.log(prix);

let prixTotal = 0;
teddies.forEach(doudou =>{
    prixTotal = prixTotal + doudou.price;    
})
prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${prixTotal}€</span>`

//let effacer = document.querySelector('.delete') ;       
// function deleteTeddies(el){
//     if(effacer.classList.contains('delete')){
//         effacer.parentElement.parentElement.remove();            
//     }
// }

// document.querySelector('.delete').addEventListener("click", (e) => {
//     e.preventDefault();
//     if(effacer.classList.contains('delete')){
//                 effacer.parentElement.parentElement.remove();  
                
//                 //sessionStorage.removeItem('teddies[i]');
//     }
    
}
;
