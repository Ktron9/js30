document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.variables input');
    inputs.forEach(input => input.addEventListener('change', setValue));
    inputs.forEach(input => input.addEventListener('mousemove', setValue));

    function setValue () {
        const suffix = this.dataset.sizing || ''; 
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
})