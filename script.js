let date = new Date();

// Day of the Week
let day = date.getDay();
switch (day) {
    case 0:
        day = "Sun";
        break;
    case 1:
        day = "Mon";
        break;
    case 2:
        day = "Tues";
        break;
    case 3:
        day = "Wed";
        break;
    case 4:
        day = "Thur";
        break;
    case 5:
        day = "Fri";
        break;
    case 6:
        day = "Sat";
        break;
}

// Month
let month = date.getMonth();
switch (month) {
    case 0:
        month = "Jan";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "Jun";
        break;
    case 6:
        month = "Jul";
        break;
    case 7:
        month = "Aug";
        break;
    case 8:
        month = "Sept";
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
}

//Date 
let todaysDate = date.getDate();

//Displaying Today's Date
document.querySelector('.day').innerHTML = day;
document.querySelector('.month').innerHTML = month;
document.querySelector('.date').innerHTML = todaysDate;

function updateTime () {
    let date = new Date();

    // Live Hour
    let currentHours = date.getHours();

    // AM or PM
    let ampm = document.querySelector('.am-pm');
    ampm = currentHours >= 12 ? ampm.innerHTML = "PM" : ampm.innerHTML = "AM";

    // 12 Hour Clock
    currentHours = currentHours % 12;
    currentHours = currentHours % 12 === 0 ? 12 : currentHours; 

    // Live Minute
    let currentMinutes = date.getMinutes();
    currentMinutes = currentMinutes < 10 ? '0'+ currentMinutes : currentMinutes;

    // Displaying Live Time
    document.querySelector('.liveHours').innerHTML = currentHours;
    document.querySelector('.liveMinutes').innerHTML = currentMinutes;

    setTimeout(updateTime, 1000);
}

updateTime();




//Stopwatch

//Buttons
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

//Times
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

//Timer Variable
let timer;


//Start Time
startBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(startTime,10);

    stopBtn.addEventListener('click', () => {
        clearInterval(timer);
    });


});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    document.querySelector('.hours').innerHTML = hours < 10 ? '0' + hours : hours;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
    document.querySelector('.milliseconds').innerHTML = milliseconds < 10 ? '0' + milliseconds : milliseconds;
});



function startTime () {

        milliseconds++;
    
        if (milliseconds === 100) {
            seconds++;
            milliseconds = 0;
        }
    
        else if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        else if (minutes === 60) {
            hours++;
            minutes = 0;
        }

    document.querySelector('.milliseconds').innerHTML = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.hours').innerHTML = hours < 10 ? '0' + hours : hours;
}
