// Scroll effects
window.addEventListener('scroll', () => {
    const render = document.querySelector('img.render');
    const name = document.querySelector('h1.name');
    const nav = document.querySelector('nav');

    if (window.scrollY > 0) nav.style.backgroundColor = 'rgba(0 0 0 / 10%)';
    else nav.style.backgroundColor = '';
    
    document.querySelector('header.landing').style.filter = `saturate(${100-window.scrollY/15}%)`;
    document.querySelector('ul.socials').style.transform = `translateY(${window.scrollY*-0.1}px)`;
    document.querySelector('h3.title').style.filter = `blur(${window.scrollY/120}px)`;
    render.style.filter = `blur(${window.scrollY/40}px)`;
    name.style.filter = `blur(${window.scrollY/60}px)`;
    name.style.transform = `translateY(${window.scrollY*0.1}px)`;
    render.style.transform = `translateY(${window.scrollY*0.3}px)`;
});