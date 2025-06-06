class ProcessComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/process/process-component.html');
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('process-comp', ProcessComponent);
