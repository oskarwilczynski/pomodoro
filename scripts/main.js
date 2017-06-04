const
    upperButtons = document.getElementById("upperButtons"),
    work = document.getElementById("work"),
    longBreak = document.getElementById("longBreak"),
    shortBreak = document.getElementById("shortBreak"),
    timer = document.getElementById("timer"),
    mode = document.getElementById("mode"),
    addTime = document.getElementById("addTime"),
    time = document.getElementById("time"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    reduceTime = document.getElementById("reduceTime"),
    lowerButtons = document.getElementById("lowerButtons"),
    start = document.getElementById("start"),
    resumePause = document.getElementById("resumePause"),
    reset = document.getElementById("reset");
    alarm = document.getElementById("alarm");

let
    clock;
    clockInterval;

function intervalTimer(callback, interval) {
    let
        timerId, startTime;
        remaining = 0;
        state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

    this.pause = function() {
        if (state != 1) {
            return;
        }

        remaining = interval - (new Date() - startTime);
        window.clearInterval(timerId);
        state = 2;
    };

    this.resume = function() {
        if (state != 2) {
            return;
        }

        state = 3;
        window.setTimout(this.timeoutCallback, remaining);
    };

    this.timeoutCallback = function() {
        if (state != 3) {
            return;
        }

        callback();

        startTime = new Date();
        timerId = window.setInterval(callback, interval);
        state = 1;
    };

    startTime = new Date();
    timerId = window.setInterval(callback, interval);
    state = 1;
}

clockInterval = new intervalTimer(function() {
    if (seconds.innerHTML == 0) {
        if (minutes.innerHTML !== "00") {
            minutes.innerHTML -= 1;
            minutes.innerHTML = leadingZeros(minutes.innerHTML);
            seconds.innerHTML = "59";
        }

        else if (minutes.innerHTML == "00") {
            clearInterval(clock);
        }
    }

    else if (seconds.innerHTML !== 0) {
        seconds.innerHTML -= 1;
        seconds.innerHTML = leadingZeros(seconds.innerHTML);
    }
}, 1000);

work.addEventListener("click", workOn);
function workOn() {
    mode.innerHTML = this.innerHTML;
    minutes.innerHTML = "25";
    seconds.innerHTML = "00";
}

longBreak.addEventListener("click", longBreakOn);
function longBreakOn() {
    mode.innerHTML = this.innerHTML;   
    minutes.innerHTML = "15";
    seconds.innerHTML = "00";
}

shortBreak.addEventListener("click", shortBreakOn);
function shortBreakOn() {
    mode.innerHTML = this.innerHTML;  
    minutes.innerHTML = "05";
    seconds.innerHTML = "00";
}

reset.addEventListener("click", function() {
    work.addEventListener("click", workOn);
    longBreak.addEventListener("click", longBreakOn);
    shortBreak.addEventListener("click", shortBreakOn);
    addTime.addEventListener("click", addTimeButton);
    reduceTime.addEventListener("click", reduceTimeButton);
    clearInterval(clock);

    mode.innerHTML = "Work";
    minutes.innerHTML = "25";
    seconds.innerHTML = "00";
});

function leadingZeros(i) {
    return ("00" + i).slice(-2);
}

addTime.addEventListener("click", addTimeButton);
function addTimeButton() {
    minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
    minutes.innerHTML = leadingZeros(minutes.innerHTML);
    if (minutes.innerHTML == 61) {
        minutes.innerHTML = "01";
    }
}

reduceTime.addEventListener("click", reduceTimeButton);
function reduceTimeButton() {
    minutes.innerHTML = parseInt(minutes.innerHTML) - 1;
    minutes.innerHTML = leadingZeros(minutes.innerHTML);
    if (minutes.innerHTML == 00) {
        minutes.innerHTML = "60";
    }
}

start.addEventListener("click", startTimer);
function startTimer() {
    work.removeEventListener("click", workOn);
    longBreak.removeEventListener("click", longBreakOn);
    shortBreak.removeEventListener("click", shortBreakOn);
    addTime.removeEventListener("click", addTimeButton);
    reduceTime.removeEventListener("click", reduceTimeButton);

    clock = window.setInterval(function() {
        if (seconds.innerHTML == 0) {
            if (minutes.innerHTML !== "00") {
                minutes.innerHTML -= 1;
                minutes.innerHTML = leadingZeros(minutes.innerHTML);
                seconds.innerHTML = "59";
            }

            else if (minutes.innerHTML == "00") {
                clearInterval(clock);
            }
        }

        else if (seconds.innerHTML !== 0) {
            seconds.innerHTML -= 1;
            seconds.innerHTML = leadingZeros(seconds.innerHTML);
        }
    }, 1000)
}