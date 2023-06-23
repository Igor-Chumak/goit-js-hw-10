// https://thecatapi.com/ email: chigorv@gmail.com user: chigorvik
// request api https://api.thecatapi.com/v1/images/search?
const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'api_key=live_yW6ggR3i34HsiLDgf08CYeP40RDSpnwnrV2v1Rdhq6jx8BHcc17ytNdQVYHj12Vz';

function fetchBreeds() {
  const url = `${API_URL}/breeds?${API_KEY}`;
  return (
    fetch(url)
      .then(res => res.json())
      // .then(console.log)
      .catch(() => onShowError())
  );
}

function fetchCatByBreed(breedId) {
  const url = `${API_URL}/images/search?${API_KEY}&breed_ids=${breedId}`;
  return fetch(url)
    .then(res => res.json())
    .then(console.log)
    .catch(() => onShowError());
}

function onShowError() {
  //  Notify.failure('Error loading page...');
  console.error('Error loading page...');
}

export { fetchBreeds, fetchCatByBreed };
