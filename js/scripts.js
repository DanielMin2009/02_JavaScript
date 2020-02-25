//var button01 = document.forms["splitNameForm"]["btnSplitName"];
var button01 = document.getElementById("btnSplitName");
var button02 = document.getElementById("btnFindVocals");
var button03 = document.getElementById("btnMapName");
var button04 = document.getElementById("btnNameSurname");

button01.addEventListener("click", splitName, true);
button02.addEventListener("click", findVocals, true);
button03.addEventListener("click", mapName, true);
button04.addEventListener("click", nameSurname, true);

function splitName() {

    let name = document.getElementById("txtName").value;
    let arrName = new Array(); //Seria innecesari
    arrName = name.split("");
    let txt = "";
    let letter;

    for (letter of arrName) {
        txt += letter + "<br>";
    }
    document.getElementById("answer01").innerHTML = txt;
}


function findVocals() {

    let name = document.getElementById("txtName02").value;
    let arrName = new Array(); //Seria innecesari
    arrName = name.split("");
    let character;

    let isVocal = /[aeiou]/gi;
    let isConsonant = /[^aeiou]/gi;
    let isNumber = /\d/g; //Puc posar isNan() en un if
    let isLetter = /[a-z]/gi;
    let witheSpace = /\s/;


    for (character = 0; character < arrName.length; character++) {

        if (arrName[character].match(isLetter)) { // Si és una lletra
            if (arrName[character].match(isVocal)) { //Si és una vocal
                console.log("This is the vocal: " + arrName[character]);
                document.getElementById("answer02").innerHTML += arrName[character] + " : <span class='odd'>is a vocal</span><br>";
            } else if (arrName[character].match(isConsonant)) { //Si és una consonant
                console.log("This is the consonant: " + arrName[character]);
                document.getElementById("answer02").innerHTML += arrName[character] + " : <span class='even'>is a consonant</span><br>";
            }
        } else if (arrName[character].match(isNumber)) {
            console.log("People's names can't content: " + arrName[character]);
            document.getElementById("answer02").innerHTML = "People's names can't content: " + arrName[character] + "<br>";
        } else if (arrName[character] == witheSpace) { //Si és un espai en blanc 
            document.getElementById("answer02").innerHTML = "this is a special char." + "<br>";
            console.log("this is a special char");
        }
    }
}

//Preguntar a Ismael per no imprimir lletres repetides més d'una vegada
function mapName() {

    let name = document.getElementById("txtName03").value;
    let arrName = new Array();
    arrName = name.split("");

    let emptyArr = new Array();

    let obj = new Map();
    let txt = "";


    arrName.map(function(letter) {
        obj[letter] = (obj[letter] || 0) + 1;
        txt += letter + ": " + obj[letter] + "<br>";
    });

    document.getElementById("answer03").innerHTML = txt;
    console.log(obj);

    /*let newArrName = new Array();
    let counter = 0;

    for (i = 0; i < arrName.length; i++) {
        let letter = arrName[i];
        if (newArrName.includes(letter)) {
            console.log("");
        } else {
            newArrName.push(letter);
            console.log(newArrName);
            counter++;
        }
    }*/
}


function nameSurname() {

    let introName = document.getElementById("txtName04").value;
    let introSurname = document.getElementById("txtSurname04").value;

    let arrName = new Array();
    arrName = introName.split(" ");

    let arrSurname = new Array();
    arrSurname = introSurname.split(" ");

    console.log("Primer array: " + arrName);
    console.log("Segon array: " + arrSurname);

    arrName.push(" ");

    let fullName = arrName.join(" " + arrSurname);
    console.log(fullName);

    document.getElementById("answer04").innerHTML = fullName;
}

/*

var mapName = (item1, item2) => {



    let name = document.getElementById("txtName03").value;
    let arrName = new Array();
    arrName = name.split("");
    let character;

    let isNumber = /\d/g;
    let isLetter = /[a-z]/gi;




    return `Letters ${item1}, Times ${item2}!`;
}

if (arrName[character].match(isLetter)) {

}



/*
var hello3 = (item1, item2) => {
    return `Hello ${item1}, good bye ${item2}!`;
}
console.log(hello3("World", "Moon"));
*/



/*
var hello1 = function () {
    return "Hello World!";
}

console.log(hello1());


//===================(Arrow Function notation)

//multiple line block
var hello2 = () => {
    return "Hello World!";
}

console.log(hello2());


//Esto se puede hacer en una sola linea de código (Sign line Block)
var hello3 = () => "Hello World!";
console.log(hello3());

//===================

/*

${} sustituye a + ítem +
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList('orange','hello');


var hello3 = (item1, item2) => {
    return `Hello ${item1}, good bye ${item2}!`;
}
console.log(hello3("World", "Moon"));
*/