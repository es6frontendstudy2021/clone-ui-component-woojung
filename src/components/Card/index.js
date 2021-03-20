import './style.scss';

const getClass = ({ size, bordered }) => {
  const classList = [];
  if (size === 'small') classList.push('ant-card-small');
  if (bordered) classList.push('ant-card-bordered');
  return classList.join(' ');
};

const Card = ({
  id,
  title = '',
  className = '',
  size = 'default',
  bordered = true,
  children = '',
}) => {
  return `
    <div class="ant-card ${className} ${getClass({ size, bordered })}" ${id ? `id="${id}"` : ''}>
      ${title
        ? `<div class="ant-card-head">
            <div class="ant-card-head-wrapper">
              ${title}
            </div>
          </div>`
        : ''
      }
      <div class="ant-card-body">
        ${children}
      </div>
    </div>
  `;
};

export default Card;
