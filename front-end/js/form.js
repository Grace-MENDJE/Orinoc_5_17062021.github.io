const form = document.getElementById('form');
console.log(form);
const  firstName = document.getElementById('firstname');
const  lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const adress = document.getElementById('adress');
const city = document.getElementById('city');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //récuperer les valeurs des inputs
    const firstValue = firstName.value.trim();
    const lastValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const adressValue = adress.value.trim();
    const cityValue = city.value.trim();

    if(firstValue===''){
        //show error
        //add error class
        setErrorFor(firstName, 'FirstName cannot be blank');
    }else{
        //add success class
        setSuccessFor(firstName);
    }

    if(lastValue===''){
        //show error
        //add error class
        setErrorFor(lastName, 'LastName cannot be blank');
    }else{
        //add success class
        setSuccessFor(lastName);
    }

    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        //add success class
        setSuccessFor(email);
    }

    if(adressValue===''){
        //show error
        //add error class
        setErrorFor(adress, 'Adress cannot be blank');
    }else{
        //add success class
        setSuccessFor(adress);
    }

    if(cityValue===''){
        //show error
        //add error class
        setErrorFor(city, 'City cannot be blank');
    }else{
        //add success class
        setSuccessFor(city);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;//form-control;
     
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //adderror class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;//form-control;  
    
    formControl.className = 'form-control success input';
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}



// let prenom = document.querySelector('#prenom');
// console.log(prenom);
// let nom = document.querySelector('#nom');
// let mail = document.querySelector('#mail');
// let adresse = document.querySelector("#adresse");
// console.log(adresse);
// let ville = document.querySelector("#ville");
// console.log(ville);

// document.querySelector("#commande").addEventListener("click", (e) => {
//     e.preventDefault();
//     //console.log("mamamammmmmmmmmmmmmmmmmmmmmmmm");
//     // Pour la validation du formulaire
//     // if(prenom.value === ''|| nom.value ===''|| mail.value != mailto || adresse.value ==='' || ville ===''){
//     //     alert('remplissez les champs vides')        
//     // }
//     if(prenom.value ===''){
//         alert('Ecrivez votre prénom');        
//     };
//     if( nom.value ===''){
//         alert('Ecrivez votre nom'); 
//     }

    // let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if( mail.value===''|| mail.value.match(mailformat)){
    //     alert('Ecrivez correctement votre mail'); 
    // }

    
//     const identite = (prenom, nom, mail, adresse, ville);
//     switch (identite) {
//         case "prenom.value === ''":
//           alert('Ecrivez votre prénom');
//           break;
//         case "nom.value ===''":
//             alert('Ecrivez votre prénom');
//           break;        
//         case "mail.value != mailto":
//           alert('Ecrivez correctement votre mail');
//           break;
//         case "adresse.value ===''":
//             alert('Ecrivez votre adresse');
//           break;
//         case "ville ===''":
//             alert('Ecrivez votre ville');
//             break;
//         default:
//           console.log('oooooooooooooooooooooooooooooooooooook');
//       }
// });