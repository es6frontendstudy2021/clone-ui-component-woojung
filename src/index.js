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
