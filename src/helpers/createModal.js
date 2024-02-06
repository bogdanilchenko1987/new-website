import * as basicLightbox from 'basiclightbox';

function createModal(product) {
  const instance = basicLightbox.create(
    `
    <div class = "modal">
      <img src="${product.img}" alt="${product.name}" width = "300" />
      <h2>${product.name}</h2>
      <h3>${product.price} грн.</h3>
      <p>${product.description}</p>
      <div>
        <button class = "js-favourite">Add to favourite</button>
        <button class = "js-basket">Add to basket</button>
      </div>
    </div>
`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { createModal };
