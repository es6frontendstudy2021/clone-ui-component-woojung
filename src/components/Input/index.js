import { getUniqueId } from "../../../lib/id";
import { getElementByReactId, onRender, setComponentAttributes, useState } from "../../../lib/react";
import { Eye, EyeInvisible } from "../../icons";
import './style.scss';


let isFocused = false;

const SIZE_CLASS_MAP = {
  large: 'ant-input-lg',
  middle: '',
  small: 'ant-input-sm',
};

const getClass = ({
  size, bordered
}) => {
  const classList = [];
  classList.push(SIZE_CLASS_MAP[size]);
  if (!bordered) classList.push('ant-input-borderless');

  return classList.join(' ');
}

const Input = ({
  type = 'text',
  size = 'middle',
  disabled = false,
  bordered = true,
  placeholder = '',
  value = '',
  prefix,
  suffix,
  reactId = getUniqueId(),
}) => {
  // setComponentAttributes({
  //   reactId,
  //   attributes: {
  //   },
  // });

  const input = `
    <input 
      data-reactid="${reactId}" 
      class="ant-input ${getClass({ size, bordered })}"
      type="${type}"
      ${disabled ? 'disabled' : ''}
      placeholder="${placeholder}"
      value="${value}"
    />
  `;

  if (prefix || suffix) {
    return `
      <span class="ant-input-affix-wrapper">
        ${prefix ? `<span class="ant-input-prefix">${prefix}</span>`: ''}
        ${input}
        ${suffix ? `<span class="ant-input-suffix">${suffix}</span>`: ''}
      </span> 
    `
  }

  return input;
};

Input.Password = () => {
  const reactId = getUniqueId();
  const [value, setValue] = useState('passwordValue', '');
  const [hidePassword, setHidePassword] = useState('hidePaddword', true);

  onRender(() => {
    const $input = getElementByReactId(reactId);
    if (!$input) {
      return;
    }
    const $password = getElementByReactId(reactId).closest('.ant-input-affix-wrapper');
    $password.classList.add('ant-input-password');
    
    $input.addEventListener('focus', () => {
      $password.classList.add('ant-input-password-focused');
    });
    $input.addEventListener('focusout', () => {
      $password.classList.remove('ant-input-password-focused');
    });

    const $suffix = $password.querySelector('.ant-input-suffix');
    $suffix.addEventListener('click', () => {
      setHidePassword(!hidePassword);
      setValue($input.value);
    });
  });

  return Input({ reactId, type: hidePassword ? 'password' : 'text', suffix: hidePassword ? EyeInvisible : Eye, value });
};

export default Input;
