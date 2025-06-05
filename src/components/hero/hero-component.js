class HeroComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/hero/hero-component.html');
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('hero-comp', HeroComponent);
