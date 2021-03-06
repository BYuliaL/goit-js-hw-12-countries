import './styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce/index.js';
import refs from './js/refs.js';

refs.searchInput.addEventListener(
  'input',
  debounce(() => {
    const inputValue = refs.searchInput.value.trim();
    if (inputValue) {
      refs.countriesContainer.innerHTML = '';
      fetchCountries(inputValue);
    }
  }, 500),
);
