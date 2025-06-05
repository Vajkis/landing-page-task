class CertificateComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(
      './components/certificate/certificate-component.html'
    );
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('certificate-comp', CertificateComponent);
