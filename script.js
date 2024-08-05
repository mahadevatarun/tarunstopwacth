// script.js
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.getElementById('stopwatch');
let int = null;

document.getElementById('startStopBtn').addEventListener('click', () => {
    if (int === null) {
        int = setInterval(displayTimer, 10);
        document.getElementById('startStopBtn').innerHTML = 'Stop';
    } else {
        clearInterval(int);
        int = null;
        document.getElementById('startStopBtn').innerHTML = 'Start';
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(int);
    int = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00:00:00.00';
    document.getElementById('startStopBtn').innerHTML = 'Start';
    document.getElementById('laps').innerHTML = '';
});

document.getElementById('lapBtn').addEventListener('click', () => {
    if (int !== null) {
        let lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
        let lapItem = document.createElement('li');
        lapItem.innerText = lapTime;
        document.getElementById('laps').appendChild(lapItem);
    }
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    timerRef.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(Math.floor(milliseconds / 10))}`;
}

function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}
