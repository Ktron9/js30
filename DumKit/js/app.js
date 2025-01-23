const playSound = (e) => {
    const key = this.document.querySelector(`.key[data-key='${e.key.toLowerCase()}']`);
    if (!key) {
        return;
    }
    const audio = key.querySelector('audio')
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const removeTransition = (event) => {    
    if (event.propertyName != 'transform') {
        return;
    };

    event.target.classList.remove('playing');
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('keydown', playSound);
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})

