import Button, { BUTTON_COLOR } from '../Button';
import Icon from '../Icon';
import { showModal } from '../common';
import AddGroupModal from './AddGroupModal';
import AddPlaceModal from './AddPlaceModal';
import Card from '../Card';

const GroupList = (Group) => ({ groups, onAddGroup, onSelectGroup, onAddPlace, onSelectPlace }) => {
  const validGrouplist = Object.entries(groups).filter(([_id, group]) => group?.id).map(([_id, group]) => group);

  const onClickGroupTitle = ({ target }) => {
    const $group = target.closest('.group');
    toggleGroupSelected({ $el: $group });
    onSelectGroup && onSelectGroup({ group: groups[$group.dataset.id]});
    document.querySelector('.place.place--is-selected')?.classList.remove('place--is-selected');
  }
  
  const groupElements = validGrouplist.map((group) =>`
    <li class="group-item list-group-item">
      ${Group({ group, onClickTitle: onClickGroupTitle, onSelectPlace })}
    </li>
  `).join('');

  return `
    <div class="group-list">
      ${AddGroupModal({ onOk: onAddGroup })}
      ${AddPlaceModal({
        onOk: ({ place }) => { 
          onAddPlace({
            place: {
              groupId: document.querySelector('.list-group-item.group--is-selected').dataset.id,
              ...place,
            }
          });
        },
      })}
      ${ Card({ title: getCardTitle(), className: 'group-list__card', content: groupElements })}
    </div>
  `
}

const toggleGroupSelected = ({ $el }) => {
  const groupElements = $el.closest('.group-list').querySelectorAll('.group');
  for (const $group of groupElements) {
    $group.classList[$group === $el ? 'add' : 'remove']('group--is-selected');
  }
};

const getCardTitle = () => `
  <div class="flex-row group-list__title">
    <span class="card-title">
      그룹
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

export default GroupList;
