// Age effect
const birthDate = new Date("Febuary 04, 2007 07:52:00");
let lastAge = '';
setInterval(() => {
    const age = `${Math.round((new Date().getTime()-birthDate.getTime())/(60 * 60 * 24 * 365.25 / 100000))/100000000}`;
    for (let i = 0; i < 11; i++) {
        if (lastAge[i] !== age[i]) {
            // console.log(age[i]);
        }
    }
    document.querySelector('span#age').innerText = age+'0'.repeat(11-age.length);
    lastAge = age;
}, 100)

// Scroll effects
window.addEventListener('scroll', () => {
    const render = document.querySelector('img.render');
    const name = document.querySelector('h1.name');
    const nav = document.querySelector('nav');

    if (window.scrollY > 0) nav.style.backgroundColor = 'rgba(19 21 27 / 90%)';
    else nav.style.backgroundColor = '';
    
    document.querySelector('header.landing').style.filter = `saturate(${100-window.scrollY/15}%)`;
    document.querySelector('ul.socials').style.transform = `translateY(${window.scrollY*-0.1}px)`;
    document.querySelector('h3.title').style.filter = `blur(${window.scrollY/120}px)`;
    render.style.filter = `blur(${window.scrollY/40}px)`;
    name.style.filter = `blur(${window.scrollY/60}px)`;
    name.style.transform = `translateY(${window.scrollY*0.1}px)`;
    render.style.transform = `translateY(${window.scrollY*0.3}px)`;
});

// Pricing
for (let e of document.querySelectorAll('li.option')) {
    e.querySelector('input').onclick = () => {
        e.querySelector('div.check-wrapper').style.backgroundColor = e.querySelector('input').checked?'var(--hl-dark)':'var(--bg-light)';
    }
    e.querySelector('input').onclick();
}