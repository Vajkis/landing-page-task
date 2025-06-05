class MenuComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/menu/menu-component.html');
    const template = await response.text();
    this.innerHTML = template;

    const menuButonDOM = this.querySelector('.menu__button');
    menuButonDOM.addEventListener('click', () => {
      menuButonDOM.classList.toggle('menu__button--show');
    });
  }
}

customElements.define('menu-comp', MenuComponent);
