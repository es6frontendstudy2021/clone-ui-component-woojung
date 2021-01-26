import { authService, databaseService } from './firebase';
import Header from './components/Header';
import Map from './components/Map';
import './style.scss';
import Card from './components/Card';

let map = null;

window.onload = () => {
  const $root = document.querySelector('#root');
  databaseService.ref('places/1').on('value', (s) => {
    const d = s.val();
    console.log(d);
  })
  $root.innerHTML = `
    ${Header({ className: 'header' })}
    <div class="content">
      <div class="flex-row">
        ${Map({ width: '70%', height: '80vh' })}
        ${Card({ title: '장소'})}
      </div>
    </div>
  `;

  function addPlace({ name, address }) {
    databaseService.ref('places/1').set({
      name,
      address,
    });
  }

};
