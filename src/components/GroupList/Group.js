const Group = ({ key, name, places = [] }) => `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    ${name}
    <span class="badge bg-primary rounded-pill">${places.length}</span>
  </li>
`;

export default Group;
