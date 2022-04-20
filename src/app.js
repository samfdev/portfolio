// Scroll effects
window.addEventListener('scroll', () => {
    const render = document.querySelector('img.render');
    const name = document.querySelector('h1.name');
    render.style.transform = `translateY(${window.scrollY*0.3}px)`;
    render.style.filter = `blur(${window.scrollY/20}px)`;
    name.style.filter = `blur(${window.scrollY/40}px)`;
    document.querySelector('h3.title').style.filter = `blur(${window.scrollY/100}px)`;
    name.style.transform = `translateY(${window.scrollY*0.1}px)`;
    document.querySelector('ul.socials').style.transform = `translateY(${window.scrollY*-0.1}px)`;
});