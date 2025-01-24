
document.addEventListener('DOMContentLoaded', function() {
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    const hourHand = document.querySelector('.hour-hand');
    
    
    const setHandClock = () => {
        let currentTime = new Date();        
        secondHand.style.transform = `rotate(${currentTime.getSeconds() * 6}deg)`;
        minHand.style.transform = `rotate(${currentTime.getMinutes() * 6}deg)`;
        hourHand.style.transform = `rotate(${currentTime.getHours() * 30}deg)`;
    }
    setInterval(setHandClock, 1000);
    setHandClock()
})