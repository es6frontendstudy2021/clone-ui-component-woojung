import { getUniqueId } from "../../../lib/id";
import { setComponentAttributes } from "../../../lib/react";
import Loading from "../Loading";
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

const getClass = ({ type, shape, size, loading, danger, ghost, children }) => {
  const classList = [];
  classList.push(TYPE_CLASS_MAP[type]);
  classList.push(SHAPE_CLASS_MAP[shape]);
  classList.push(SIZE_CLASS_MAP[size]);
  if (loading) classList.push('ant-btn-loading');
  if (danger) classList.push('ant-btn-dangerous');
  if (ghost) classList.push('ant-btn-background-ghost');
  if (!children) classList.push('ant-btn-icon-only');
  return classList.join(' ');
};

const Button = ({
  type = 'primary',
  shape,
  size = 'middle',
  loading = false,
  disabled = false,
  danger = false,
  ghost = false,
  children,
  block = false,
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
      class="ant-btn ${getClass({ type, shape, size, loading, danger, ghost, children })}"
      data-reactid="${reactId}"
      ${disabled ? 'disabled' : ''}>
      ${loading ? `<span class="ant-btn-loading-icon">${Loading()}</span>` : ''}
      ${children ? `<span>${children}</span>` : ''}
    </button>
  `;
};

export default Button;
