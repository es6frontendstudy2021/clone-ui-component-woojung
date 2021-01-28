import './style.scss';

const Card = ({ title = '', className = '', headerClassName = '' } = { title: '', className: '', headerClassName: '' }) => {
  return `
    <div class="card ${className}">
      ${ title.length ? `<h5 class="card-header ${headerClassName}">${title}</h5>` : '' }
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge bg-primary rounded-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
      </div>
    </div>
  `;
}

export default Card;
