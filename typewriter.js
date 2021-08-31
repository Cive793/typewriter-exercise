"use strict";

const text = document.getElementById("typewriter").innerHTML;
const letters = text.split("");
let newLetter;

/* let updatedLetter;
let finalText; */

console.log(text);
console.log(letters);

let maxNumberOfIterations;
let iterator;

init();
function init() {
  maxNumberOfIterations = text.length;
  iterator = -1;
  loop();
}

function loop() {
  //console.log("Loop");
  iterator++;

  if (iterator < maxNumberOfIterations) {
    //console.log("I am running");

    /* newLetter = letters[iterator]; */
    newLetter = letters.join("").slice(0, iterator + 1);

    console.log(newLetter);
    //console.log(finalText);
    setTimeout(loop, 200);
    printLetter();
  }

  function printLetter() {
    document.querySelector("#typewriter").innerHTML = newLetter;
  }
}
