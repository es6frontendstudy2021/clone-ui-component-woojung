const Card = ({ title = '' } = { title: '' }) => {
  return `
    <div class="card menu">
      ${ title.length ? `<h5 class="card-header">${title}</h5>` : '' }
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  `;
}

export default Card;
