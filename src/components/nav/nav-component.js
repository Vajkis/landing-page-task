class NavComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/nav/nav-component.html');
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('nav-comp', NavComponent);
