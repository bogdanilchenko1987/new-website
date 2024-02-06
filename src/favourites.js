import { common } from './common';
import { createmarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';
import 'basiclightbox/dist/basiclightbox.min.css';

const list = document.querySelector('.js-list');
const favourite = JSON.parse(localStorage.getItem(common.KEY_FAVOURITE)) ?? [];

createmarkup(favourite, list);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }
}

function findProduct(htmlElement) {
  const productId = Number(htmlElement.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
