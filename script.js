var counter = localStorage.getItem("counter");

function counterUp () {
    counter++;
    localStorage.setItem("counter", counter);
    document.getElementById("counter").innerHTML = counter;
}

function counterDouble () {
    counter *= 2;
    localStorage.setItem("counter", counter);
    document.getElementById("counter").innerHTML = counter;
}

function counterZero () {
    if (confirm("THIS WILL SET IT ALL TO ZERO, CANNOT BE UNDONE, ARE YOU SURE?")){
        if (confirm("ARE YOU SURE SURE???")) {
        counter = 0;
        localStorage.setItem("counter", counter);
        document.getElementById("counter").innerHTML = counter;
        }
    }
}

function counterLoad () {
    document.getElementById("counter").innerHTML = counter;
}