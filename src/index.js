import React, { ReactDOM, useState, useEffect } from '../lib/react';
import Card from './components/Card';
import Button from './components/Button';
import Typography from './components/Typography';
import Input from './components/Input';
import './style.scss';
import Loading from './components/Loading';

const { Text } = Typography;

const App = () => {
  const [value, setValue] = useState('value', 0);
  const [text, setText] = useState('text', '');

  useEffect(() => {
    console.log(value);
  }, ['value']);

  return Card({
    title: 'Buttons',
    children: `
      ${Card({
        title: 'Type',
        children: `
          <ul>
            <li>${Button({ children: 'Primary Button', type: 'primary' })}</li>
            <li>${Button({ children: 'Default Button', type: 'default' })}</li>
            <li>${Button({ children: 'Dashed Button', type: 'dashed' })}</li>
            <li>${Button({ children: 'Text Button', type: 'text' })}</li>
            <li>${Button({ children: 'Link Button', type: 'link' })}</li>
          </ul>`
        })
      }
      ${Card({
        title: 'Shape',
        children: `
          <ul>
            <li>${Button({ children: 'Circle', shape: 'circle' })}</li>
            <li>${Button({ children: 'Default' })}</li>
            <li>${Button({ children: 'Round', shape: 'round' })}</li>
          </ul>`
        })
      }
      ${Card({
        title: 'Size',
        children: `
          <ul>
            <li>${Button({ children: 'Large', size: 'large' })}</li>
            <li>${Button({ children: 'Default' })}</li>
            <li>${Button({ children: 'Small', size: 'small' })}</li>
          </ul>`
        })
      }
    `
  });
};

ReactDOM.render(App, document.querySelector('#root'));
