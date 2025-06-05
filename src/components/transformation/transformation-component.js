class TransformationComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(
      './components/transformation/transformation-component.html'
    );
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('transformation-comp', TransformationComponent);
