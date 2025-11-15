window.addEventListener('DOMContentLoaded', () => {
    const renders = ['render1.png', 'render2.png', 'render3.png'];
    const pick = renders[Math.floor(Math.random() * renders.length)];
    document.body.style.backgroundImage = `url('${pick}')`;
});
