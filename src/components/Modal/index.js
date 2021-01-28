import Button, { BUTTON_COLOR } from '../Button';
import { firebaseInstatnce } from '../../firebase';

const Modal = ({
  id,
  title,
  className = '',
  headerClassName = '',
  cancleText = '취소',
  okText = '확인'
} = {}) => {
  const closeModal = ({ target }) => {
    target.closest('.modal').querySelector('.btn-close').click();
  }
  return `
    <div class="modal fade ${className}" id="${id}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header ${headerClassName}">
            <h5 class="modal-title" id="modalLabel">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
          </div>
          <div class="modal-footer">
            ${Button({
              className: 'cancle__btn',
              color: BUTTON_COLOR.GRAY,
              content: cancleText,
              onClick: closeModal,
            })}
            ${Button({
              className: 'confirm__btn',
              color: BUTTON_COLOR.BLUE,
              content: okText,
              // onClick: onSocialClick,
            })}
          </div>
        </div>
      </div>
    </div>
  `;
};

export default Modal;

