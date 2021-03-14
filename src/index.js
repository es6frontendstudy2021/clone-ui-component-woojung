import React, { ReactDOM, useState, useEffect } from '../lib/react';
import Card from './components/Card';
import Button from './components/Button';
import Typography from './components/Typography';
import Input from './components/Input';
import './style.scss';

const { Text } = Typography;

const App = () => {
  const [value, setValue] = useState('value', 0);
  const [text, setText] = useState('text', '');

  useEffect(() => {
    console.log(value);
  }, ['value']);

  return Card({
    children: `
      ${Card({
        children: `
          <ul>
            <li>${Button({ children: 'Primary Button', type: 'primary' })}</li>
            <li>${Button({ children: 'Default Button', type: 'default' })}</li>
            <li>${Button({ children: 'Dashed Button', type: 'dashed' })}</li>
            <li>${Button({ children: 'Text Button', type: 'text' })}</li>
            <li>${Button({ children: 'Link Button', type: 'link' })}</li>

            <li>${Button({ children: 'Danger Primary', type: 'primary', danger: true })}</li>
            <li>${Button({ children: 'Danger Default', type: 'default', danger: true })}</li>
            <li>${Button({ children: 'Danger Dashed', type: 'dashed', danger: true })}</li>
            <li>${Button({ children: 'Danger Text', type: 'text', danger: true })}</li>
            <li>${Button({ children: 'Danger Link', type: 'link', danger: true })}</li>

            <li>${Button({ children: 'Circle Button', shape: 'circle' })}</li>
            <li>${Button({ children: 'Round Button', shape: 'round' })}</li>

            <li>${Button({ children: 'Primary(disabled)', type: 'primary', disabled: true })}</li>
            <li>${Button({ children: 'Default(disabled)', type: 'default', disabled: true })}</li>
            <li>${Button({ children: 'Dashed(disabled)', type: 'dashed', disabled: true })}</li>
            <li>${Button({ children: 'Text(disabled)', type: 'text', disabled: true })}</li>
            <li>${Button({ children: 'Link(disabled)', type: 'link', disabled: true })}</li>
          </ul>
          `
        })}
        ${Card({
          children: `
            ${Button({ children: 'Large Button', size: 'large' })}
            ${Button({ children: 'Middle Button', size: 'middle' })}
            ${Button({ children: 'Small Button', size: 'small' })}
          `
        })}
      ${Text({ children: `<h1>${value}</h1>` })}
      ${Button({
        children: 'UP',
        onClick: () => {
          setValue(value + 1);
        }
      })}
      ${Input({ value: text })}
    `
  });
};

ReactDOM.render(App, document.querySelector('#root'));
