function createmarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ img, name, id }) =>
          `      <li data-id = "${id}" class = 'js-card'>
        <img src="${img}" alt="${name}" width ="300" />
        <h2>${name}</h2>
        <p><a class="js-info" href="#">More info</a></p>
        <div>
        <button class = "js-favourite">Add to favourite</button>
        <button class = "js-basket">Add to basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `
      <li>
      <img src="https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="placeholder" width ="600" />
      </li>
      `;
  }
  list.innerHTML = markup;
}

export { createmarkup };
