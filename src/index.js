import React, { ReactDOM, useState, useEffect } from '../lib/react';
import Card from './components/Card';
import Button from './components/Button';
import Typography from './components/Typography';
import Input from './components/Input';

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
          ${Button({ children: 'Primary Button', type: 'primary' })}
          ${Button({ children: 'Default Button', type: 'default' })}
          ${Button({ children: 'Dashed Button', type: 'dashed' })}
          ${Button({ children: 'Text Button', type: 'text' })}
          ${Button({ children: 'Link Button', type: 'link' })}
          ${Button({ children: 'Primary Button', type: 'primary', danger: true })}
          ${Button({ children: 'Default Button', type: 'default', danger: true })}
          ${Button({ children: 'Dashed Button', type: 'dashed', danger: true })}
          ${Button({ children: 'Text Button', type: 'text', danger: true })}
          ${Button({ children: 'Link Button', type: 'link', danger: true })}
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
