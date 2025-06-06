class ProductComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/product/product-component.html');
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('product-comp', ProductComponent);
