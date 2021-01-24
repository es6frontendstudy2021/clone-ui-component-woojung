import { setEventListener } from '../common';

export const BUTTON_COLOR = {
  BLUE: 'primary',
  GRAY: 'secondary',
  GREEN: 'success',
  RED: 'danger',
  YELLOW: 'warning',
  SKY_BLUE: 'info',
  WHITE: 'light',
  BLACK: 'dark',
  LINK: 'link',
};

export const BUTTON_BORDER_TYPE = {
  OUTLINE: 'outline',
};

export const BUTTON_TYPE = {
  BUTTON: 'button',
};

const getButtonTheme = (...args) => {
  const buttonThemes = ['btn', ...args].filter(Boolean);
  return buttonThemes.join('-');
};

const Button = ({
  id,
  className,
  content = '',
  type = BUTTON_TYPE.BUTTON,
  color = BUTTON_COLOR.BLUE,
  borderType = BUTTON_BORDER_TYPE.SOLID,
  onClick,
} = {}) => {
  const dataId = new Date().getTime();
  setEventListener({ dataId, onClick });
  const buttonTheme = getButtonTheme(color, borderType);
  return `
    <button
      data-id=${dataId}
      ${id ? `id=${id}` : ''}
      class="btn ${buttonTheme} ${className || ''}"
      type=${type}>
      ${content}
    </button>
  `;
};

export default Button;
