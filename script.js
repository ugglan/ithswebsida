document.addEventListener('DOMContentLoaded', function() {
    const sun = document.createElement('div');
    sun.style.position = 'fixed';
    sun.style.width = '50px';
    sun.style.height = '50px';
    sun.style.borderRadius = '50%';
    sun.style.backgroundColor = 'yellow';
    sun.style.boxShadow = '0 0 20px yellow';
    sun.style.zIndex = '1000';
    document.body.appendChild(sun);

    let position = localStorage.getItem('sunPosition') || -50;
    position = parseFloat(position);

    function animateSun() {
        position += 0.5;
        if (position > window.innerWidth + 50) {
            position = -50;
        }
        sun.style.left = position + 'px';
        sun.style.top = Math.sin(position / 100) * 50 + 50 + 'px';
        localStorage.setItem('sunPosition', position);
        requestAnimationFrame(animateSun);
    }
    animateSun();
});