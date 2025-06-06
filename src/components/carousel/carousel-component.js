class CarouselComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(
      './components/carousel/carousel-component.html'
    );
    const template = await response.text();
    this.innerHTML = template;

    const itemsContainerDOM = this.querySelector('.carousel__items-container');
    const itemListDOM = this.querySelectorAll('.carousel__item');
    const dotListDOM = this.querySelectorAll('.carousel__paginator-dot');
    const buttonLeftDOM = this.querySelector(
      '.carousel__paginator__arror-left'
    );
    const buttonRightDOM = this.querySelector(
      '.carousel__paginator__arror-right'
    );

    const activeDotClass = 'carousel__paginator-dot--active';
    const activeItemClass = 'carousel__item--active';
    const itemsCount = dotListDOM.length;
    let active = 0;

    buttonLeftDOM.addEventListener('click', () => {
      if (--active < 0) {
        active = dotListDOM.length - 1;
      }

      makeTransition();
    });

    buttonRightDOM.addEventListener('click', () => {
      if (++active === itemsCount) {
        active = 0;
      }

      makeTransition();
    });

    function makeTransition() {
      for (let dotDOM of dotListDOM) {
        dotDOM.classList.remove(activeDotClass);
      }
      for (let itemDOM of itemListDOM) {
        itemDOM.classList.remove(activeItemClass);
      }

      dotListDOM[active].classList.add(activeDotClass);
      itemListDOM[active].classList.add(activeItemClass);

      itemsContainerDOM.style.transform = `translateX(-${active * 100}%)`;
    }
  }
}

customElements.define('carousel-comp', CarouselComponent);
