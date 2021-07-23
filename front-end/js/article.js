const nounours = document.getElementById('container');
console.log(nounours);
const url = window.location.href;
console.log(url);
const id = url.split('=')[1];
console.log(id);

const btn = document.getElementsByClassName('btn__panier');
console.log(btn);
const cardTitle = document.getElementById('card-title');
console.log(cardTitle);
const couleur = document.getElementsByClassName('form-select');
console.log(couleur);
const description = document.getElementById('card-description');
console.log(description);
const price = document.getElementById('card-price');
console.log(price);
fetch(`http://localhost:3000/api/teddies/${id}`) 
    .then(response => response.json())
    .then(doudou => {
        cardTitle.innerHTML += doudou.name;

})
btn.onclick = () =>{   

        // couleur.textContent = "";
        // const p = createElement('p');
        // console.log('p');
        //li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        

    
}