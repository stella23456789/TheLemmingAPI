window.addEventListener('DOMContentLoaded', () => {
    const renders = Array.from({ length: 20 }, (_, i) => `lemming/render${i + 1}.png`);
    document.body.style.backgroundImage = `url('${renders[(Math.random() * 20) | 0]}')`;
});
