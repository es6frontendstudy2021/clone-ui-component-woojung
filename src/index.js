import { authService, databaseService } from './firebase';
import Header from './components/Header';
import Map from './components/Map';
import './style.scss';

let map = null;

window.onload = () => {
  const $root = document.querySelector('#root');
  $root.innerHTML = `
    ${Header({ className: 'header' })}
    ${Map({ width: '70%', height: '80vh' })}
  `;

  function addPlace({ name, address }) {
    databaseService.ref('places/1').set({
      name,
      address,
    });
  }

};
