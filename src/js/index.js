import '../css/style.css';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

// npm i notiflix
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const notifyWarning = {
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  opacity: 0.7,
  timeout: 1500,
};

// npm install @slim-select/vue
// import { defineComponent } from 'vue';
// import SlimSelect from '@slim-select/vue';
// import 'slim-select/dist/slimselect.css';

const refs = {
  select: document.querySelector('.breed-select'),
  animalCard: document.querySelector('.cat-info'),
  loaderWait: document.querySelector('.loader'),
  alertError: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.loaderWait.classList.add('is-hidden');
refs.alertError.classList.add('is-hidden');

fetchBreeds()
  .then(breeds => {
    toggleShowLoadListSelection();
    markupSelect(breeds);
  })
  .catch(() => onShowError())
  .finally(() => toggleShowLoadListSelection());
return refs.select.addEventListener('change', onChoiceAnimal);

//       ---    functions    ---

function markupSelect(items) {
  const markup = items
    .map(item => `<option value="${item.id}">${item.name}</option>`)
    .join('');
  refs.select.insertAdjacentHTML('afterbegin', markup);
  // new SlimSelect({
  //   select: '#first-select',
  // });
  // return;
}

function onChoiceAnimal(e) {
  const breed_ids = event.target.value;
  console.log('breed_ids: ', breed_ids);
  toggleShowLoadCatInfo();
  return fetchCatByBreed(breed_ids)
    .then(res => {
      markupCatsCard(...res);
    })
    .catch(() => onShowError())
    .finally(() => toggleShowLoadCatInfo());
}

function markupCatsCard(cat) {
  const markup = `<img src="${cat.url}" alt='cat' width=700><div class="cat-description">
    <p class='cat-titles'> ${cat.breeds[0].name}</p>
    <p> ${cat.breeds[0].description} </p>
    <p><span class='cat-temperament'>Temperament:</span> ${cat.breeds[0].temperament}</p></div>`;
  refs.animalCard.innerHTML = markup;
}

function toggleShowLoadListSelection() {
  refs.loaderWait.classList.toggle('is-hidden');
  refs.select.classList.toggle('is-hidden');
}

function toggleShowLoadCatInfo() {
  refs.loaderWait.classList.toggle('is-hidden');
  refs.catInfo.classList.toggle('is-hidden');
}

function onShowError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page!',
    notifyWarning
  );
  // refs.alertError.classList.remove('is-hidden');
}
