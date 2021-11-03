var counter = localStorage.getItem("counter");

function counterUp() {
    counter++;
    counterLoad();
}

function counterDouble() {
    counter *= 2;
    counterLoad();
}

function counterZero() {
    if (confirm("THIS WILL SET IT ALL TO ZERO, CANNOT BE UNDONE, ARE YOU SURE?")){
        if (confirm("ARE YOU SURE SURE???")) {
        counter = 0;
        counterLoad();
        }
    }
}

function counterLoad() {
    localStorage.setItem("counter", counter);
    document.getElementById("counter").innerHTML = counter;

    if (counter==69) {
        document.getElementById("counter").innerHTML = "nice";
    } else if (counter=420) {
        document.getElementById("counter").innerHTML = "weed";
    } else if (counter==69420) {
        document.getElementById("counter").innerHTML = "VERY NICE!";
    }
}