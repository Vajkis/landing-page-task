class CarouselItemComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(
      './components/carouselItem/carouselItem-component.html'
    );
    const template = await response.text();
    this.innerHTML = template;
  }
}

customElements.define('carousel-item-comp', CarouselItemComponent);
