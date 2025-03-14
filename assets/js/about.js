// Handle Run Number Of Times
let valueDisplays = document.querySelectorAll('.num');
let interval = 3000;

window.addEventListener('scroll', function () {
    var top = window.pageYOffset;
    if (top == 600) {
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute('data-val'));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
});
