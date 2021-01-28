import Button, { BUTTON_COLOR } from '../Button';
import Card from '../Card';
import { showModal } from '../common';
import Modal from '../Modal';
import Icon from '../Icon';
import './style.scss';

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
  return `
    <div class="group-list">
      ${Modal({ title: '그룹 추가', className: 'group-list__add-group-modal', headerClassName: 'add-group-modal__header' })}
      ${Card({title: cardTitle(), className: 'group-list__card' })}
    </div>
  `
}

export default GroupList;
