document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
    const increaseBtn = document.getElementById('increase');
    const resetBtn = document.getElementById('reset');
    const decreaseBtn = document.getElementById('decrease');

    let count = 0;

    increaseBtn.addEventListener('click', function () {
        count++;
        updateCounter();
    });

    resetBtn.addEventListener('click', function () {
        count = 0;
        updateCounter();
    });

    decreaseBtn.addEventListener('click', function () {
        count--;
        updateCounter();
    });

    function updateCounter() {
        counterElement.textContent = count;
        // Add animation class for creativity
        counterElement.classList.add('animate');
        setTimeout(() => {
            counterElement.classList.remove('animate');
        }, 500);
    }
});
