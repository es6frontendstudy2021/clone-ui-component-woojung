import Button, { BUTTON_COLOR } from '../Button';
import Card from '../Card';
import { onRender, showModal } from '../common';
import Modal from '../Modal';
import Icon from '../Icon';
import './style.scss';
import { databaseService } from '../../firebase';
import Group from './Group';

const cardTitle = () => `
  <div class="flex-row">
    <span class="card-title">
      장소
    </span>
    <div class="right">
      ${Button({
        content: Icon.plus(),
        className: 'add-group-button',
        color: BUTTON_COLOR.LINK,
        onClick: ({ target }) => {
          showModal({ target: target.closest('button'), modalSelector: '.group-list__add-group-modal' });
        },
      })}
    </div>
  </div>
`;

const GroupList = () => {
  onRender(() => {
    databaseService.ref('groups').on('value', (response) => {
      const groups = response.val();

      const content = `
        <ul class="list-group">
          ${Object.entries(groups).filter(([_id, group]) => group?.id).map(([_id, group]) => Group(group)).join('')}
        </ul>
      `;
      document.querySelector('.group-list__card-container').innerHTML = 
        Card({ title: cardTitle(), className: 'group-list__card', content });
    });
  });

  return `
    <div class="group-list">
      ${Modal({
        title: '그룹 추가',
        className: 'group-list__add-group-modal',
        headerClassName: 'add-group-modal__header',
        body: `
          <form novalidate>
            <div class="mb-3">
              <label for="groupName" class="form-label">그룹 이름</label>
              <input type="text" class="form-control" id="groupName" required>
              <div class="invalid-feedback">
                그룹 이름을 입력해주세요.
              </div>
            </div>
          </form>
        `,
        onOk: ({ target }) => {
          const $modal = target.closest('.modal');
          const $form = $modal?.querySelector('form');
          const $groupNameInput = $form.querySelector('#groupName');
          const { value = '' } = $groupNameInput;
          if (!value.length) {
            $form.classList.add('was-validated');
            return;
          }
          const newGroup = {
            id: new Date().getTime(),
            name: value,
            places: [],
          };
          databaseService.ref(`groups/${newGroup.id}`).set(newGroup);
          
        },
        onCancel: ({ target }) => {
          const $modal = target.closest('.modal');
          const $form = $modal?.querySelector('form');
          $form.classList.remove('was-validated');
          
          const $groupNameInput = $form.querySelector('#groupName');
          $groupNameInput.value = '';
        }
      })}
      <div class="group-list__card-container"></div>
    </div>
  `
}

export default GroupList;
