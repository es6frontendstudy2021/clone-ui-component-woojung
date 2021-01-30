import './style.scss';

const Card = ({ title = '', className = '', headerClassName = '', content = '' } = { title: '', className: '', headerClassName: '', content: '' }) => {
  return `
    <div class="card ${className}">
      ${ title.length ? `<h5 class="card-header ${headerClassName}">${title}</h5>` : '' }
      <div class="card-body">
        ${content}
      </div>
    </div>
  `;
}

export default Card;
