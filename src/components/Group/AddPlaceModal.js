import Button from '../Button';
import Map, { moveMap } from '../Map';
import Modal from '../Modal';
import { getUniqueId, onRender } from '../common';

const mapId = 'add-place-modal';

const AddPlaceModal = ({ onOk, onCancel }) => {
  const place = {};

  const onSearchPlace = () => {
    Map.searchAddress({
      address: document.querySelector('.place-form__name').value,
      onSearch: ({ roadAddress, x, y }) => {
        place.marker?.setMap(null);
        const map = globalThis.maps[mapId];
        moveMap({ map, x, y });
        place.marker = new naver.maps.Marker({ position, map, zoom: 15 });
        place.x = Number(x);
        place.y = Number(y);
        place.address = roadAddress;
      },
    });
  };

  onRender(() => {
    const $form = document.querySelector('.place-modal__form');
    const $submitButton = document.querySelector('.place-form__submit-name');
    $form.addEventListener('submit', (event) => {
      event.preventDefault();
      $submitButton.click();
    });
  });

  return Modal({
    title: '장소 추가',
    className: 'group-list__add-place-modal',
    headerClassName: 'add-place-modal__header',
    body: `
      <form class="place-modal__form" novalidate>
        <div class="mb-3">
          <label for="placeName" class="form-label">장소 이름</label>
          <div class="flex-row space-between">
            <input type="text" class="form-control place-form__name" id="placeName" required>
            ${Button({ className: 'place-form__submit-name', content: '검색', onClick: onSearchPlace })}
          </div>
          <div class="invalid-feedback">
            장소 이름을 입력해주세요.
          </div>
        </div>
        ${Map({ id: mapId, width: '460px', height: '40vh' })}
      </form>
    `,
    onOk: () => {
      if (!place.address) {
        return;
      }
      onOk && onOk({
        place: {
          id: getUniqueId(),
          x: place.x,
          y: place.y,
          address: place.address,
        }
      });
    },
    onCancel: ({ target }) => {
      const $modal = target.closest('.modal');
      const $form = $modal?.querySelector('form');
      $form.classList.remove('was-validated');
      
      const $placeNameInput = $form.querySelector('#placeName');
      $placeNameInput.value = '';
      onCancel && onCancel();
    }
  })
}

export default AddPlaceModal;
