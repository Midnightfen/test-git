/*
let fruit = "Pomme";

fruit ="Poire";

console.log(fruit);

// Permet d'initialiser une variable nommée myNumber qui est egale à 10
let myNumber = 10;

// Permet d'afficher le contenu de cette variable
console.log(myNumber); // =====> 10

//Je modifie le contenu de ma variable
muNumber = 5;

//Je modifie encore la variable
myNumber = "Bonjour";

console.log(myNumber); // ======> "Bonjour"

const fruit = "Citron"; // =======> Le contenu ne bougera pas avec const et ne peut etre changé.
console.log(fruit);
*/

/*
let list= ["Henry", "Potatoes", 50, false]
console.log(list)

list.splice(1)
console.log(list)

list.length = 1;
console.log(list)
*/

/*
let fruit ="citron";
console.log(`Mon fruit preferé est ${fruit}`); //=====> Concaténation

let name = "Lucas";
let age = "31";
let country = "France";
console.log(`Je m'appele ${name} j'ai ${age} ans et j'habite en ${country}.`) */

/*function sayHello() {
    let message = "Hello";
    console.log(message);   
}*/



/*function sayGoodbye() {
    console.log("Goodbye"); 

}*/

/*function popUp() {
    alert("Vous venez de me crediter de 20 000$, merci bien!");
}
function scriptJava() {
    alert("Bienvenu");
} */
/*
let chocolate = prompt("Quel type de chocolat aimes tu ?");

if (chocolate == "au lait"){
    alert("Moi aussi je l'adore");
}else{
    alert("Moi je ne suis poas fan");
}


let number = prompt("Trouves le bon nombre");

if (number == 99) {
    alert("Bravo gagné");
}else{
    alert("Perdu"); 
}*/

/*let color = prompt("Preferes-tu le blanc ou le noir");

if (color =="noir") {
    console.log("Le noir c'est classe");
} else if(color=="blanc") {
    console.log("Le blanc c'est dur à laver");
    
}

let burger = prompt("Quel types de burger preferes tu");

if (burger =="cheeseburger") {
    console.log("c'est mon preferé");
}else if (burger=="hamburger"){
    console.log("Un grand classique j'aime bien aussi");
}else{
    console.log("Euh t'as rien repondu");
}*/

/*for (let chocolat = 0; chocolat < 10; chocolat++) {
    console.log(`Ma variable est egale à ${chocolat}`);
    
}
console.log("Fin de la boucle");*/

/*let list = ["Lucas", "Benoit", "Said", "Soline", "Oceane", "Claire", "Adam", "Lasmi", "Quentin", "Anthony", "Orkun"];

console.log("Voici les eleves du DWM")

list.forEach(apprenant => {
    console.log(apprenant);
}); */

/*
let password = prompt("veuillez entrer votre mot de passe");

while (password.toLowerCase() != "itakademy"){
    password = prompt("mot de passe erroné");
}

console.log("Vous avez le bon mot de passe"); */

/* let myH1 = document.querySelector("p");
myH1.innerHTML = "Hello";

let bigh1 = document.querySelector(".red");
bigh1.innerHTML = "Ceci est un html";

let mypara = document.querySelectorAll(".list-element")[2];
mypara.innerHTML = "Je ne sais pas quoi ecrire donc j'ecris n'importe"

let description = document.querySelector("figcaption")
description.innerHTML = "Le cerf est un superbe animal" */



//CREATION D'UN EVENT LISTENER SUR LA CLASSE .RED

/*document.querySelector(".red").addEventListener("click", () => {
    document.querySelector(".red").classList.add("different-red")
    document.querySelector(".border").classList.toggle("different-red")
});
*/

//ACTIVER UN BOUTON CLICK

/*document.querySelector(".bouton").addEventListener("click", () => {
    console.log(document.querySelector(".typetext").value);
}); */

//UTILISATION DU MOUSEOVER SUR LE UL DE L'INDEX

document.querySelector(".ulhide").addEventListener("mouseover", () => {
    document.querySelector(".ulhide").classList.toggle("hide")
});
document.querySelector(".ulhide").addEventListener("mouseout", () => {
    document.querySelector(".ulhide").classList.toggle("hide")
});


document.querySelector("#discover").addEventListener("click", () => {
    document.querySelector(".firstPara").classList.toggle("disapear")
});

document.querySelector("#discover-more").addEventListener("click", () => {
    document.querySelector(".secondPara").classList.toggle("disapear")
});
