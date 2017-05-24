const
    upperButtons = getElementById("upperButtons"),
    work = getElementById("work"),
    longBreak = getElementById("longBreak"),
    shortBreak = getElementById("shortBreak"),
    timer = getElementById("timer"),
    mode = getElementById("mode"),
    addTime = getElementById("addTime"),
    time = getElementById("time"),
    minutes = getElementById("minutes"),
    seconds = getElementById("seconds"),
    reduceTime = getElementById("reduceTime"),
    lowerButtons = getElementById("lowerButtons"),
    start = getElementById("start"),
    resumePause = getElementById("resumePause"),
    reset = getElementById("reset");

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