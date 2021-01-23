import { authService, databaseService } from './firebase';
import './style.scss';

window.onload = () => {
  function addPlace({ name, address }) {
    databaseService.ref('places/1').set({
      name,
      address,
    });
  }
};
