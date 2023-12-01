const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown() {
    const christmasDay = 25;

    function updateCountdown() {
        // Get current date and time
        const today = new Date();
        const currentDay = today.getDate();
        const currentHour = today.getHours();
        const currentMinute = today.getMinutes();
        const currentSecond = today.getSeconds();

        // Calculate remaining time
        let remainingDays; 
        let remainingHours;
        let remainingMinutes;
        let remainingSeconds;

        if (currentDay <= christmasDay) {
            remainingDays = christmasDay - currentDay;
        } else {
            // Christmas next year
            const nextChristmas = new Date(today.getFullYear() + 1, 11, christmasDay);
            const timeDifference = nextChristmas - today;
            remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        }

        remainingHours = 24 - currentHour - 1;
        remainingMinutes = 60 - currentMinute - 1;
        remainingSeconds = 60 - currentSecond;

        countdownDisplay.innerHTML = `
            <div class="container">
                <img class="bg" src="countdown.jpg">
                <div class="days">
                    <h2>${remainingDays}</h2>
                    <p class="days-paragraph">Days</p>
                </div>
                <div class="timer">
                    <div class="hours">${remainingHours} hours</div>
                    <div class="minutes">${remainingMinutes} minutes</div>
                    <div class="seconds">${remainingSeconds} seconds</div>
                </div>
            </div
            
        `;
    }
    updateCountdown();

    setInterval(updateCountdown, 1000);
}

renderCountdown();
