import './style.scss';

const Card = ({ id, title = '', className = '', children = '' }) => {
  return `
    <div class="ant-card ${className}" ${id ? `id="${id}"` : ''}>
      <div class="ant-card-head">
        <div class="ant-card-head-wrapper">
          ${title}
        </div>
      </div>
      <div class="ant-card-body">
        ${children}
      </div>
    </div>
  `;
};

export default Card;
