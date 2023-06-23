import '../css/style.css';

// npm i notiflix
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
