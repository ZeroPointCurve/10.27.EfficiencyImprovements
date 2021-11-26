function RollDie() {
    //Craps function//
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //Introduces a random number of selected value//

    var sum = die1 + die2
    //Sums up the Dice Values//
    document.getElementById("Craps").innerHTML = "Die 1 = " + die1
    document.getElementById("Die2").innerHTML = "Die 2 = " + die2
    document.getElementById("DieTotal").innerHTML = "Sum = " + sum
    document.getElementById("CrapOut").innerHTML = " "
    //Displays Info for the User//

    if (sum == 7 || sum == 11) {
        document.getElementById("CrapOut").innerHTML = "CRAPS - you lose"
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("CrapOut").innerHTML = "DOUBLES - you win"
    }
    //Extra functions for game play//
}

function IgnitionSequence() {
    //countdown function//
    alert("Confirm Ignition Sequence")
    var currTime = 50
    //Sets Countdown range//
    document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
    currTime = currTime - 5;
    //Sets rate of countdown change//

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
        currTime = currTime - 5;
    }, 5000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
        currTime = currTime - 5;
    }, 10000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
        currTime = currTime - 5;
    }, 15000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
        currTime = currTime - 5;
    }, 20000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "T-Minus: " + currTime;
        currTime = currTime - 5;
    }, 25000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
        currTime = currTime - 5;
    }, 30000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
        currTime = currTime - 5;
    }, 35000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
        currTime = currTime - 5;
    }, 40000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
        currTime = currTime - 5;
    }, 45000);

    setTimeout(function () {
        document.getElementById("CountDown").innerHTML = "BLASTOFF!";
        currTime = currTime - 5;
    }, 50000);
    //Ends countdown sequence, displays final state//
}
function AbortAbort() {
    alert("End Of Time")
        document.getElementById("CountDown").innerHTML = "Ignition Sequence Aborted";
}