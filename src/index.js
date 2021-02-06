import { authService, databaseService } from './firebase';
import Header from './components/Header';
import Map from './components/Map';
import Group from './components/Group';
import { onRender } from './components/common';
import './style.scss';

const { List: GroupList } = Group;

const postGroup = ({ group }) => {
  databaseService.ref(`groups/${group.id}`).set(group);
}

const postPlace = ({ place }) => {
  databaseService.ref(`places/${place.id}`).set(place);
}

window.onload = () => {
  const $root = document.querySelector('#root');

  databaseService.ref('groups').on('value', (response) => {
    const groups = response.val();
    databaseService.ref('places').on('value', (response) => {
      const places = response.val();
      for (const placeId of Object.keys(places)) {
        const place = places[parseInt(placeId)];
        const { x, y, groupId } = place;
        if (!x || !y) {
          continue;
        }
        new naver.maps.Marker({
          position: new naver.maps.LatLng(Number(y), Number(x)),
          map: globalThis.maps.map,
          zoom: 15
        });

        if (groups[groupId].places) {
          groups[groupId].places.push(place);
        } else {
          groups[groupId].places = [place];
        }
      }

      const $grouopListContainer = document.querySelector('.group-list-container');
      $grouopListContainer.innerHTML = GroupList({ groups, onAddGroup: postGroup, onAddPlace: postPlace });
    });
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
