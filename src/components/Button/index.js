import { getUniqueId } from "../../../lib/id";
import { setComponentAttributes } from "../../../lib/react";
import { LoadingOutlined } from "../../icons";
import Spin from "../Spin";
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

const getClass = ({ type, shape, size, loading, danger, ghost, block, children }) => {
  const classList = [];
  classList.push(TYPE_CLASS_MAP[type]);
  classList.push(SHAPE_CLASS_MAP[shape]);
  classList.push(SIZE_CLASS_MAP[size]);
  if (loading) classList.push('ant-btn-loading');
  if (danger) classList.push('ant-btn-dangerous');
  if (ghost) classList.push('ant-btn-background-ghost');
  if (block) classList.push('ant-btn-block');
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
  className = '',
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
    attributes: {onclick: event => {
      if(href) location.href = href;
      onClick(event);
    }},
  });

  const button = `
    <button
      class="ant-btn ${className} ${getClass({ type, shape, size, loading, danger, ghost, block, children })}"
      type="${htmlType}"
      data-reactid="${reactId}"
      ${disabled ? 'disabled' : ''}>
      ${loading ? `${Spin({ indicator: LoadingOutlined })}` : ''}
      ${icon || ''}
      ${children ? `<span>${children}</span>` : ''}
    </button>
  `;
  if (!href) return button;
  return `<a href="${href}" target="${target}">${button}</a>`
};

export default Button;
