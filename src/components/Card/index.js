import './style.scss';

const Card = ({ title, children }) => {
  return `
    <div class="ant-card">
      <div class="ant-card-head">
        ${title}
      </div>
      <div class="ant-card-body">
        ${children}
      </div>
    </div>
  `;
};

export default Card;
