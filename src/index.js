import React, { ReactDOM } from '../lib/react';
import ButtonGallary from './components/Button/ButtonGallary';
import CardGallary from './components/Card/CardGallary';
import InputGallary from './components/Input/InputGallary';
import SpinGallary from './components/Spin/SpinGallary';
import Row from './components/Row';
import './style.scss';

const App = () => {
  return `
    ${Row({children: ButtonGallary()})}
    ${Row({children: CardGallary()})}
    ${Row({children: InputGallary()})}
    ${Row({children: SpinGallary()})}
  `;
};

ReactDOM.render(App, document.querySelector('#root'));
