import React, { ReactDOM } from '../lib/react';
import ButtonGallary from './components/Button/gallary';
import './style.scss';

const App = () => {
  return ButtonGallary();
};

ReactDOM.render(App, document.querySelector('#root'));
