import './style.scss';

const Row = ({ className = '', children }) => {
  return `<div class="ant-row ${className}">${children}</div>`;
};

export default Row;

