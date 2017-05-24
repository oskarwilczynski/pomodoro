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

work.addEventListener('click', workOn);
function workOn() {
    mode.innerHTML = this.innerHTML;

    minutes.innerHTML = "25";
    seconds.innerHTML = "00";
}

shortBreak.addEventListener('click', shortBreakOn);
function shortBreakOn() {
    mode.innerHTML = this.innerHTML;
    
    minutes.innerHTML = "05";
    seconds.innerHTML = "00";
}

longBreak.addEventListener('click', longBreakOn);
function longBreakOn() {
    mode.innerHTML = this.innerHTML;
    
    minutes.innerHTML = "15";
    seconds.innerHTML = "00";
}