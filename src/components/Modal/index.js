import Button, { BUTTON_COLOR } from '../Button';
import { firebaseInstatnce } from '../../firebase';

const Modal = ({
  id,
  title,
  newAccount,
  cancleText = '취소',
  okText = '확인'
} = {}) => {
  const onSocialClick = ({ target }) => {
    const provider = new firebaseInstatnce.auth.GoogleAuthProvider();

    console.log(provider);
    // const data = await authService.signInWithPopup(provider);
  };

  return `
    <div class="modal fade" id="${id}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
            <form onSubmit={onSubmit}>
              <input class="form-control mb-2" name="email" type="email" placeholder="email" value={email} onChange={onChange} required />
              <input class="form-control mb-2" name="password" type="password" placeholder="password" value={password} onChange={onChange} required />
               <input type="submit" value=${title} />
            </form>

          <div>
            ${Button({
    className: 'header__signin',
    color: BUTTON_COLOR.YELLOW,
    content: '구글',
    onClick: onSocialClick,
  })}
          </div>

          </div>
        </div>
      </div>
    </div>
  `;
};

export default Modal;

