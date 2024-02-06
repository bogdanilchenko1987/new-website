import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg',
    name: 'Шуруповерт',
    price: 150,
    description:
      'Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.',
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/2386/catalog_origin_300032.jpg',
    name: 'Перфоратор',
    price: 3948,
    description:
      'Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д.',
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/1336/catalog_origin_306750.jpg',
    name: 'Шліфмашина',
    price: 1299,
    description:
      'Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.',
  },
  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/8794/catalog_origin_313007.jpg',
    name: 'Пила',
    price: 11049,
    description:
      'Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.',
  },
  {
    id: 5,
    img: 'https://static.dnipro-m.ua/cache/products/3982/catalog_origin_308280.jpg',
    name: 'Реноватор',
    price: 897,
    description:
      'Реноватор серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.',
  },
  {
    id: 6,
    img: 'https://static.dnipro-m.ua/cache/products/1330/catalog_origin_310329.jpg',
    name: 'Паяльник',
    price: 3699,
    description:
      'Паяльник електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.',
  },
  {
    id: 7,
    img: 'https://static.dnipro-m.ua/cache/products/1891/catalog_origin_305989.jpg',
    name: 'Болгарка',
    price: 11049,
    description:
      "Болгарка Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
  },
  {
    id: 8,
    img: 'https://static.dnipro-m.ua/cache/products/8812/catalog_origin_313278.jpg',
    name: 'Міксер',
    price: 10890,
    description:
      'Міксер GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.',
  },
];

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

function createmarkup(arr) {
  const markup = arr
    .map(
      ({ img, name, id }) =>
        `      <li data-id = "${id}" class = 'js-card'>
        <img src="${img}" alt="${name}" width ="300" />
        <h2>${name}</h2>
        <p><a class="js-info" href="#">More info</a></p>
        <div>
          <button>Add to favourite</button>
          <button>Add to basket</button>
        </div>
      </li>`
    )
    .join('');
  list.innerHTML = markup;
}

createmarkup(instruments);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    console.log(product);
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
