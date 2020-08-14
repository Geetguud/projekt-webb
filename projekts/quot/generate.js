"use strict";

import quotes from "./quotes.js"

let usedQuot = [];

function generate() {
    let newQuot = Math.floor(Math.random() * quotes.length);
    if (usedQuot.includes(newQuot)) {return generate()};
    usedQuot.push(newQuot);
    return newQuot
}

function newQuote() {
    currentQuot = generate();
    document.getElementById("display").innerHTML = `"${quotes[currentQuot]}"`;
}