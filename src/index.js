import React, { ReactDOM } from '../lib/react';
import ButtonGallary from './components/Button/ButtonGallary';
import CardGallary from './components/Card/CardGallary';
import Row from './components/Row';
import Spin from './components/Spin';
import './style.scss';

const App = () => {
  return `
    ${Row({children: ButtonGallary()})}
    ${Row({children: CardGallary()})}
    ${Spin({})}
  `;
};

ReactDOM.render(App, document.querySelector('#root'));
