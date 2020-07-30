"use strict"

let currentValue = [""];
let abort = [];

function numEnter(num) {
    if (currentValue === "∞") {return}
    if (!currentValue[currentValue.length - 1]) {
        currentValue[currentValue.length - 1] = num;
        display();
    } else {
        currentValue[currentValue.length - 1] = (currentValue[currentValue.length - 1] * 10) + num;
        display();
    }
}

function display() {
    if (typeof currentValue[currentValue.length - 1] === "number") {
        document.getElementById("result").innerHTML = currentValue.map(item => getNumDisplay(item)).join(" ");    
    } else {
        document.getElementById("result").innerHTML = currentValue.join(" ");
    }
}

function getNumDisplay(num) {
    if (typeof num === "string") {return num}
    if (!Number.isInteger(num)) {
        let fraction = "." + num.toString().split(".")[1]
        let resolve = num.toString().split(".")[0].split("").reverse();
        let result = [];
        for (let i = 3; resolve.length; i--) {
            if (i === 0) {
                i += 3;
                result.unshift(",");
            }
        result.unshift(resolve.shift());
        }
        return result.join("") + fraction;
    }
    let resolve = num.toString().split("").reverse();
    let result = [];
    for (let i = 3; resolve.length; i--) {
        if (i === 0) {
            i += 3;
            result.unshift(",");
        }
        result.unshift(resolve.shift());
    }
    return result.join("")
}

function operator(op) {
    currentValue[currentValue.length - 1] = getNumDisplay(currentValue[currentValue.length - 1]);
    if (!currentValue[currentValue.length - 1] && typeof currentValue[currentValue.length - 2] === "string") {
        switch(op) {
            case "+": currentValue[currentValue.length - 2] = "+"; break;
            case "-": currentValue[currentValue.length - 2] = "-"; break;
            case "x": currentValue[currentValue.length - 2] = "x"; break;
            case "/": currentValue[currentValue.length - 2] = "/"; break;
        }    
    } else {
        switch(op) {
            case "+": currentValue.push("+"); break;
            case "-": currentValue.push("-"); break;
            case "x": currentValue.push("x"); break;
            case "/": currentValue.push("/"); break;
        }
        currentValue.push("");
    }
    display();
}

function equals() {
    if (currentValue[currentValue.length - 1] === "") {currentValue.splice(-2, 2)}
    if (currentValue.length === 1) {
        display();
        return
    }
    currentValue[currentValue.length - 1] = getNumDisplay(currentValue[currentValue.length - 1]);
    let resolve = currentValue.filter((item, index) => !(index % 2)).map(item => Number(item.toString().split(",").join("")));
    let operates = currentValue.filter((item, index) => index % 2);
    if (operates.includes("/") || operates.includes("x")) {
        for (let i = 0; i < operates.length; i++) {
            if (operates[i] === 'x') {
                if (resolve[i + 1] === 0) {abort.push(0)}
                let operate = resolve.splice(i, 2).reduce((total, item) => total * item);
                resolve.splice(i, 0, operate);
                operates.splice(i, 1);
                i--;
            }
            if (operates[i] === '/') {
                if (resolve[i + 1] === 0) {abort.push(1)}
                let operate = resolve.splice(i, 2).reduce((total, item) => total / item);
                resolve.splice(i, 0, operate);
                operates.splice(i, 1);
                i--;
            }
        }
    }
    for (let i = 0; i < operates.length; i++) {
        if (operates[i] === '+') {
            let operate = resolve.splice(i, 2).reduce((total, item) => total + item);
            resolve.splice(i, 0, operate);
            operates.splice(i, 1);
            i--;
        }
        if (operates[i] === '-') {
            let operate = resolve.splice(i, 2).reduce((total, item) => total - item);
            resolve.splice(i, 0, operate);
            operates.splice(i, 1);
            i--;
        }
    }
    if (!operates.length) {
        currentValue = resolve.slice();
        display();
        checkAbort();
    } else {
        console.log(currentValue);
        console.log(resolve);
        console.log(operates);
        console.error("equals error");
    }
}

function checkAbort() {
    if (abort[0] === 0) {
        abort = [];
        currentValue = [0];
        document.getElementById("result").innerHTML = 0;
    } else if (abort[0] === 1) {
        abort = [];
        currentValue = [""];
        document.getElementById("result").innerHTML = "&infin;";
    }
}
