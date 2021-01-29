import { authService, databaseService } from './firebase';
import Header from './components/Header';
import Map from './components/Map';
import GroupList from './components/GroupList';
import './style.scss';

let map = null;

window.onload = () => {
  const $root = document.querySelector('#root');
  $root.innerHTML = `
    ${Header({ className: 'header' })}
    <div class="content">
      <div class="flex-row">
        ${Map({ width: '70%', height: '80vh' })}
        ${GroupList()}
      </div>
    </div>
  `;
};
