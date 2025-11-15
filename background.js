window.addEventListener('DOMContentLoaded', () => {
    const renders = [
        'lemming/render1.png',
        'lemming/render2.png',
        'lemming/render3.png'
    ];

    const pick = renders[Math.floor(Math.random() * renders.length)];
    document.body.style.backgroundImage = `url('${pick}')`;
});
