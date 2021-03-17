import React, { ReactDOM, useState, useEffect } from '../lib/react';
import Card from './components/Card';
import Button from './components/Button';
import Typography from './components/Typography';
import Input from './components/Input';
import './style.scss';
import Loading from './components/Loading';
import Row from './components/Row';
import ButtonGallary from './components/Button/gallary';

const { Text } = Typography;

const App = () => {

  return ButtonGallary();
};

ReactDOM.render(App, document.querySelector('#root'));
