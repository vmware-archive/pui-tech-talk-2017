import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {setCallback} from './helpers/fetch_helper';

const data = [{
  name: 'AppsMan Tom Yom Soup',
  price: '12.50',
  glutenFree: true,
  seasonal: false,
  spiciness: 2,
  description: 'Monitor your Tom Yom intake.'
}, {
  name: 'Metrics Mango Salad',
  price: '47.99',
  glutenFree: true,
  seasonal: true,
  spiciness: '',
  description: 'Chart your mango consumption!'
}, {
  name: 'Pivnet Pla Goong',
  price: '100',
  glutenFree: false,
  seasonal: false,
  spiciness: '5',
  description: 'Grilled prawns with lemongrass, onion mint with chili paste.'
}];

const root = document.getElementById('root');

setCallback(item => {
  data.push(item);
  ReactDOM.render(<App {...{data}}/>, root);
});

ReactDOM.render(<App {...{data}}/>, root);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App {...{data}}/>, root);
  })
}