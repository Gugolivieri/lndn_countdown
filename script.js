// Set the date we're counting down to
const countdownDate = new Date("October 10, 2024 21:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const timeleft = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Display the result in the element with id
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished
    if (timeleft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "It's time!";
    }
}, 1000);
