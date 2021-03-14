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

const SHAPE_CLASS_MAP = {
  circle: 'ant-btn-circle',
  round: 'ant-btn-round'
}

const getClass = ({ type, shape, size, danger }) => {
  const classList = [];
  classList.push(TYPE_CLASS_MAP[type]);
  classList.push(SHAPE_CLASS_MAP[shape]);
  classList.push(SIZE_CLASS_MAP[size]);
  if (danger) classList.push('ant-btn-dangerous');
  return classList.join(' ');
};

const Button = ({
  type = 'primary',
  shape,
  size = 'middle',
  loading = false,
  children,
  disabled = false,
  block = false,
  danger = false,
  ghost = false,
  href = '',
  htmlType = 'button',
  icon = null,
  target = '',
  onClick = event => { console.log(event) },
}) => {
  const reactId = getUniqueId();

  disabled || setComponentAttributes({
    reactId,
    attributes: {onclick: () => onClick()},
  });

  

  return `
    <button
      class="ant-btn ${getClass({ type, size, danger, shape })}"
      data-reactid="${reactId}"
      ${disabled ? 'disabled' : ''}>
      <span>${children}</span>
    </button>
  `;
};

export default Button;
