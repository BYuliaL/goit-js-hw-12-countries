import countrieTemplates from '../templates/countrie.hbs';
import countriesTemplates from '../templates/countries.hbs';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import refs from './refs';

function updateCountriesMarkup(countries) {
  if (!countries.length) {
    error({
      text: 'Can`t find any matches!',
      type: 'info',
      delay: 1500,
      hide: true,
      shadow: true,
    });
    return;
  } else if (countries.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      type: 'info',
      delay: 1500,
      hide: true,
      shadow: true,
    });
    return;
  } else if (countries.length > 1 && countries.length <= 10) {
    const markupCountries = countriesTemplates(countries);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markupCountries);
    return;
  } else if (countries.length === 1) {
    const markupCountrie = countrieTemplates(countries);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markupCountrie);
    return;
  }
}

export default updateCountriesMarkup;
