window.addEventListener('DOMContentLoaded', () => {
    const renders = [
        'lemming/render1.png',
        'lemming/render2.png',
        'lemming/render3.png',
        'lemming/render4.png',
        'lemming/render5.png',
        'lemming/render6.png',
        'lemming/render7.png',
        'lemming/render8.png',
        'lemming/render9.png',
        'lemming/render10.png',
        'lemming/render11.png',
        'lemming/render12.png',
        'lemming/render13.png',
        'lemming/render14.png',
        'lemming/render15.png',
        'lemming/render16.png',
        'lemming/render17.png',
        'lemming/render18.png',
        'lemming/render19.png',
        'lemming/render20.png'
    ];

    const pick = renders[Math.floor(Math.random() * renders.length)];
    document.body.style.backgroundImage = `url('${pick}')`;
});
