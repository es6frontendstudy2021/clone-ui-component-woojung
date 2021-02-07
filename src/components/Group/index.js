import Button, { BUTTON_COLOR } from '../Button';
import { getUniqueId, onRender, setEventListener, showModal } from '../common';
import Icon from '../Icon';
import GroupList from './GroupList';
import './style.scss';

const Group = ({ id, name, places = [], onClickTitle }) => {
  const dataKey = getUniqueId();
  setEventListener({
    dataKey,
    onClick: ({ target }) => {
      const $groupTitle = target.closest('.group-title');
      if ($groupTitle) {
        onClickTitle({ $el: $groupTitle });
        return;
      }
    },
  });
  return `
    <li class="group list-group-item list-group-item-action" data-key=${dataKey} data-id=${id}>
      <div class="group-title d-flex justify-content-between align-items-center">
        ${name}
        <div>
          ${Button({
            content: Icon.plus(),
            className: 'add-group-button',
            color: BUTTON_COLOR.LINK,
            onClick: ({ target }) => {
              showModal({ target: target.closest('button'), modalSelector: '.group-list__add-place-modal' });
            },
          })}
          <span class="badge bg-primary rounded-pill">${places.length}</span>
        </div>
      </div>
      <div class="card place-list-container ${places.length ? '' : 'place-list-container--hide' }">
        <ul class="place-list list-group">
        </ul>
      </div>
    </li>
  `;
}

Group.List = GroupList(Group);

export default Group;
