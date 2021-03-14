import { getUniqueId } from "../../../lib/id";
import { setComponentAttributes } from "../../../lib/react";
import './style.scss';

const TYPE_CLASS_MAP = {
  primary: 'ant-btn-primary' ,
  default: '',
  dashed: 'ant-btn-dashed',
  text: 'ant-btn-text',
  link: 'ant-btn-link',
};

const SIZE_CLASS_MAP = {
  large: 'ant-btn-lg' ,
  middle: '',
  small: 'ant-btn-sm' ,
};

const getClass = ({ type, size, danger }) => {
  const classList = [];
  classList.push(TYPE_CLASS_MAP[type]);
  classList.push(SIZE_CLASS_MAP[size]);
  if (danger) classList.push('ant-btn-dangerous');
  return classList.join(' ');
};

const Button = ({
  children,
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  href = '',
  htmlType = 'button',
  icon = null,
  loading = false,
  shpe,
  size = 'middle',
  target = '',
  type = 'primary',
  onClick = event => { console.log(event) },
}) => {
  const reactId = getUniqueId();

  setComponentAttributes({
    reactId,
    attributes: {onclick: () => onClick()},
  });

  

  return `
    <button class="ant-btn ${getClass({ type, size, danger })}" data-reactid="${reactId}">
      <span>${children}</span>
    </button>
  `;
};

export default Button;
