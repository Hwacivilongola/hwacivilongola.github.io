var counter = localStorage.getItem("counter");
var score = 0;

function loadEverything() {
    console.log("loaded begun")
    counterLoad();
    if (localStorage.getItem("darkMode")=="true") {
        document.body.classList.toggle("darkmode");
        console.log("toggled dark mode")
    }
    console.log("loaded everything")
}

function counterLoad() {
    counter = localStorage.getItem("counter");
    score = 0;
    localStorage.setItem("counter", counter);
    //document.getElementById("counter").innerHTML = counter;
    
    if (counter==69) {
        document.getElementById("counter").innerHTML = "nice";
        document.getElementById("score").innerHTML = "score for getting 69: "+score+" clicks";
    } else if (counter==420) {
        document.getElementById("counter").innerHTML = "weed";
        document.getElementById("score").innerHTML = "score for getting 420: "+score+" clicks";
    } else if (counter==69420) {
        document.getElementById("counter").innerHTML = "VERY NICE!";
        document.getElementById("score").innerHTML = "score for getting 62420: "+score+" clicks";
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