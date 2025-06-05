class SubscriptionComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(
      './components/subscription/subscription-component.html'
    );
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('subscription-comp', SubscriptionComponent);
