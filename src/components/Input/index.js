import { getUniqueId } from "../../../lib/id";
import { getElementByReactId, onRender, setComponentAttributes } from "../../../lib/react";
import './style.scss';


let isFocused = false;

const SIZE_CLASS_MAP = {
  large: 'ant-input-lg',
  middle: '',
  small: 'ant-input-sm',
};

const getClass = ({
  size, borderless
}) => {
  const classList = [];
  classList.push(SIZE_CLASS_MAP[size]);
  if (borderless) classList.push('ant-input-borderless');

  return classList.join(' ');
}

const Input = ({
  type = 'text',
  size = 'middle',
  disabled = true,
  borderless = false,
  placeholder = 'placeholder',
  value = '',
  // onChange = event => { console.log(event) },
}) => {
  const reactId = getUniqueId();

  // disabled || setComponentAttributes({
  //   reactId,
  //   attributes: {oninput: event => {
  //     console.log(event);
  //   }}
  // });

  // if (typeof value !== 'undefined' && typeof value !== 'string' && typeof value !== 'number') {
  //   throw new Error('value must be string type');
  // }
  // if (typeof onChange !== 'undefined' && typeof onChange !== 'function') {
  //   throw new Error('onChange must be string type');
  // }


  // onRender(() => {
  //   if (isFocused) {
  //     const input = getElementByReactId(reactId)
  //     input.focus();
  //     input.setSelectionRange(input.value.length, input.value.length);
  //   }
  // });

  setComponentAttributes({
    reactId,
    attributes: {
      // onkeyup: ({ target, key }) => {
      //   if (value === undefined && onChange === undefined) {
      //     return;
      //   }
      //   if (onChange === undefined) {
      //     target.value = value;
      //     return;
      //   }
      //   onChange(target.value);
      //   isFocused = true;
      // }
    },
  });
  return `<input 
    data-reactid="${reactId}" 
    class="ant-input ${getClass({ size, borderless })}"
    type="${type}"
    ${disabled ? 'disabled' : ''}
    placeholder="${placeholder}"
    value="${value}" />
  `;
};

export default Input;
