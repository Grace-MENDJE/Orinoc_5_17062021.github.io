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

let prix = document.querySelector('#prixtotal');
console.log(prix);

let prixTotal = 0;
teddies.forEach(doudou =>{
    prixTotal = prixTotal + doudou.price;    
})
prix.innerHTML += `Total de la commande : <span class="fw-bold text-danger">${prixTotal}€</span>`
        

