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

// <!-- Aggiungo numerazione progressiva da 1 a 100 sulla griglia 10X10caselle-->
let thisSquare = "";
let numbers = [];
for(let i = 1; i < 100 + 1; i++){ 
    console.log([i]);
    thisNumber = [i];
    const row = document.querySelector(".row");
     thisSquare = document.createElement ("div");
    thisSquare.classList.add("col");
    thisSquare.innerHTML = thisNumber;
    console.log(thisSquare);
    row.append(thisSquare);
    // row.classList.add("d_hidden");
}

// const gridContainer = document.querySelector(".container");
// gridContainer.classList.add("d_hidden");

// <!-- Creo evento bottone con display block sulla griglia di HTML -->

const startBtn = document.querySelector(".generabtn");
const generaBtnContainer = document.querySelector(".btn_container");

startBtn.addEventListener("click", function(){
generaBtnContainer.classList.add("")    

})

// <!-- Aggiungo evento su ciascuna cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. -->
thisSquare.addEventListener("click", handleSquareClick);
row.append(thisSquare);
console.log("thisSquare");

// function handleSquareClick();
// thisSquare.classList.add("bg_blue");