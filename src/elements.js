const template = document.createElement('template');
template.innerHTML = `
    <style>
        * { margin: 0; padding: 0; }
        h1 { color: var(--hl-dark); line-height: 6vh; font-size: 6vh; z-index: 11; pointer-events: none; }
        h2 { color: var(--white); line-height: 4vh; font-size: 3vh; z-index: 11; pointer-events: none; }
        img { position: absolute; top: 0; left: 0; height: 100%; }
        a { position: absolute; z-index: 10; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at -20% 20%, transparent 0%, var(--bg-lighter) 60%); }
    </style>
    <img src="">
    <h1>Name</h1>
    <h2>Lang</h2>
    <a target="_blank" href="#" class="hover"></a>
`;

class WorkExample extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('lang');
        this.shadowRoot.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.shadowRoot.querySelector('img').setAttribute('src', 'res/thumbnails/'+this.getAttribute('name')+'.jpeg');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'name': {
                this.shadowRoot.querySelector('h1').innerText = newValue;
                this.shadowRoot.querySelector('img').setAttribute('src', 'res/thumbnails/'+newValue+'jpeg');
                break;
            }
            case 'lang': this.shadowRoot.querySelector('h2').innerText = newValue; break;
            case 'href': this.shadowRoot.querySelector('a').setAttribute('href', this.getAttribute('href')) = newValue; break;
        }
    }
}

window.customElements.define('work-example', WorkExample);