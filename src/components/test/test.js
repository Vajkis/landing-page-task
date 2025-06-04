class TestComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./src/components/test/test.html');
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('test-comp', TestComponent);
