import Button, { BUTTON_COLOR } from '../Button';
import Modal from '../Modal';
import { showModal } from '../common';

const SIGNIN_MODAL_ID = 'signin-modal';

const Header = ({ className = '' } = {}) => {
  const onClickLogin = ({ target }) => {
    showModal({ target, modalSelector: `#${SIGNIN_MODAL_ID}` });
  };

  return `
    <header class=${className}>
      ${Modal({ id: SIGNIN_MODAL_ID })}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          <div class="d-flex header__right">
            ${Button({
              className: 'header__signin',
              color: BUTTON_COLOR.YELLOW,
              content: '로그인',
              onClick: onClickLogin,
            })}
            <button
              type="submit"
              class="btn btn-outline-warning header__signup"
              data-bs-toggle="modal" data-bs-target="#modal">
              회원가입
            </button>
          </div>
        </div>
      </nav>
    </header>
  `;
};

export default Header;
