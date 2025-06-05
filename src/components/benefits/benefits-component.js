class BenefitsComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(
      './components/benefits/benefits-component.html'
    );
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('benefits-comp', BenefitsComponent);
