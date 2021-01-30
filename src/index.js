import { authService, databaseService } from './firebase';
import Header from './components/Header';
import Map from './components/Map';
import Group from './components/Group';
import './style.scss';

const { List: GroupList } = Group;

const postGroup = ({ group }) => {
  databaseService.ref(`groups/${group.id}`).set(group);
}

window.onload = () => {
  const $root = document.querySelector('#root');

  databaseService.ref('groups').on('value', (response) => {
    const groups = response.val();
    const $grouopListContainer = document.querySelector('.group-list-container');
    $grouopListContainer.innerHTML = GroupList({ groups, onAddGroup: postGroup });
  });

  $root.innerHTML = `
    ${Header({ className: 'header' })}
    <div class="content">
      <div class="flex-row">
        ${Map({ width: '70%', height: '80vh' })}
        <div class="group-list-container"></div>
      </div>
    </div>
  `;
};
