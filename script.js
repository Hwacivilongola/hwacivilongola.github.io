var counter = localStorage.getItem("counter");
var score = localStorage.getItem("score");

function loadEverything() {
    console.log("loaded begun")
    counterLoad();
    if (localStorage.getItem("darkMode")=="true") {
        document.body.classList.toggle("darkmode");
        console.log("toggled dark mode")
    }
    document.getElementById("score").innerHTML = "";
    console.log("loaded everything")
}

function counterLoad() {
    localStorage.setItem("counter", counter);
    localStorage.setItem("score", score);
    counter = localStorage.getItem("counter");
    document.getElementById("counter").innerHTML = counter;
    
    if (counter==69) {
        document.getElementById("counter").innerHTML = "nice";
        document.getElementById("score").innerHTML = "score for getting 69: "+score+" clicks";
    } else if (counter==69420) {
        document.getElementById("counter").innerHTML = "VERY NICE!";
        document.getElementById("score").innerHTML = "score for getting 62420: "+score+" clicks";
    } else if (counter==70) {
        document.getElementById("counter").innerHTML = "avo's fav numby";
        document.getElementById("score").innerHTML = "score for getting 70: "+score+" clicks";
    } else if (counter==Infinity) {
        document.getElementById("counter").innerHTML = "did u cheat to get infinity?";
        document.getElementById("score").innerHTML = "score for getting infinity: "+score+" clicks";
    } else if (counter<0) {
        document.getElementById("counter").innerHTML = "how- i- im not even gonna question it";
        document.getElementById("score").innerHTML = "score for getting a negative number: "+score+" clicks";
    }
}

function counterUp() {
    counter++;
    score++;
    counterLoad();
}

function counterDouble() {
    counter *= 2;
    score++;
    counterLoad();
}

function counterZero() {
    if (confirm("THIS WILL SET IT ALL TO ZERO, CANNOT BE UNDONE, ARE YOU SURE?")){
        if (confirm("ARE YOU SURE SURE???")) {
        counter = 0;
        score = 0;
        counterLoad();
        }
    }
}

function darkMode() {
    document.body.classList.toggle("darkmode");
    if (localStorage.getItem("darkMode")=="true") {
        localStorage.setItem("darkMode",false)
    } else {
        localStorage.setItem("darkMode",true)
    }
}