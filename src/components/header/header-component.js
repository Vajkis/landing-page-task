class HeaderComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/header/header-component.html');
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('header-comp', HeaderComponent);
