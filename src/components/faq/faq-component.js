class FAQComponent extends HTMLElement {
  async connectedCallback() {
    const response = await fetch('./components/faq/faq-component.html');
    const template = await response.text();
    this.innerHTML = template;

    const faqItemListDOM = this.querySelector('.faq__items-list');

    const fileList = [
      './components/faq/faqItem1-template.html',
      './components/faq/faqItem2-template.html',
      './components/faq/faqItem2-template.html',
      './components/faq/faqItem2-template.html',
    ];

    for (const file of fileList) {
      const itemResponse = await fetch(file);
      const itemTemplate = await itemResponse.text();

      const itemDOM = document.createElement('li');
      itemDOM.classList.add('faq__item');
      itemDOM.innerHTML = itemTemplate;

      const itemButtonDOM = itemDOM.querySelector('.faq__item-button');
      itemButtonDOM.addEventListener('click', () => {
        itemDOM.classList.toggle('faq__item--active');
      });

      faqItemListDOM.appendChild(itemDOM);
    }
  }
}

customElements.define('faq-comp', FAQComponent);
