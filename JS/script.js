// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; -->

// <!-- ESECUZIONE -->
// <!-- Griglia: -->

// <!-- Aggiungo numerazione progressiva da 1 a 100 sulla griglia 10X10caselle e creo la griglia in cui inwerirli-->

let numbers = [];
let thisNumber = "";

// <!-- Creo evento sul bottone per visualizzare griglia di gioco (inserisco display block) -->

const startBtn = document.querySelector(".genera_btn");

startBtn.addEventListener("click", function(){
 generateGrid (thisNumber); 

})

// FUNCTION
function generateGrid(thisNumber) {

    for(let i = 1; i < 100 + 1; i++){ 
        console.log([i]);
        thisNumber = [i];
        row = document.querySelector(".row");
        square = document.createElement("div");
        square.style.width = `calc(100% / 10)`;
        square.style.height = `calc(100% / 10)`;
        square.classList.add("col");
        square.innerHTML = (`${thisNumber}`);
        row.append(square);
        console.log(square)
    }
return square;
}


// const gridContainer = document.querySelector(".container");
// gridContainer.classList.add("d_hidden");


// <!-- Aggiungo evento su ciascuna cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. -->
// thisSquare.addEventListener("click", handleSquareClick);
// row.append(thisSquare);
// console.log("thisSquare");

// function handleSquareClick();
// thisSquare.classList.add("bg_blue");