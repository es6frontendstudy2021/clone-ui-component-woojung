import Button from ".";
import { useState } from "../../../lib/react";
import Card from "../Card";
import Row from "../Row";

const buttonPropsInfo = {
  type: ['primary', 'default', 'dashed', 'text', 'link'],
  shape: ['default', 'circle', 'round'],
  size: [ 'middle', 'large', 'small'],
  loading: [false, true],
  disabled: [false, true],
  danger: [false, true],
  ghost: [false, true],
};

const propNames = Object.keys(buttonPropsInfo);

const initialButtonProp = {};
for (const propName of propNames) {
  initialButtonProp[propName] = buttonPropsInfo[propName][0];
}


const ButtonGallary = () => {
  const [buttonProps, setButtonProps] = useState('buttonProps', initialButtonProp);

  const options = propNames.map(propName => `
    ${Row({ children: `<label>${propName}: </label>` + buttonPropsInfo[propName].map(propValue => `
      ${Button({
        type: buttonProps[propName] === propValue ? 'primary' : 'default',
        children: propValue.toString(),
        onClick: () => setButtonProps({ ...buttonProps, [propName]: propValue })
      })}
    `).join('') })}
  `).join('');

  return `
    ${Card({
      className: 'buttons-gallary',
      title: 'Button',
      children: `
        ${options}
        ${Row({ children: Button({ ...buttonProps, children: 'Result' }) })}
      `,
    })}
  `;
};


export default ButtonGallary;
