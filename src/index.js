import { authService, databaseService } from './firebase';
import Header from './components/Header';
import Button from './components/Button';
import Modal from './components/Modal';
import './style.scss';

let map = null;

window.onload = () => {
  const $root = document.querySelector('#root');
  $root.innerHTML = `
    ${Header({ className: 'header' })}
    ${Modal({ id: 'modal' })}
  `;

  function addPlace({ name, address }) {
    databaseService.ref('places/1').set({
      name,
      address,
    });
  }

  function initMap() {
    const mapOptions = {
      center: new naver.maps.LatLng(37.5666805, 126.9784147),
      zoom: 15,
      mapTypeId: naver.maps.MapTypeId.NORMAL,
    };

    map = new naver.maps.Map('map', mapOptions);
  }

  initMap();
};
