import Button, { BUTTON_COLOR } from '../Button';
import Modal from '../Modal';
import AuthModal from '../Auth-Modal';
import { showModal } from '../common';

const SIGNIN_MODAL_ID = 'signin-modal';
const SIGNUP_MODAL_ID = 'signup-modal';

const Header = ({ className = '' } = {}) => {
  const onClickLogin = ({ target }) => {
    showModal({ target, modalSelector: `#${SIGNIN_MODAL_ID}` });
  };

  const onClickSignup = ({ target }) => {
    showModal({ target, modalSelector: `#${SIGNUP_MODAL_ID}` });
  };

  return `
    <header class=${className}>
      ${AuthModal({
        id: SIGNIN_MODAL_ID,
        title: '로그인'
      })}
      ${AuthModal({
        id: SIGNUP_MODAL_ID,
        title: '회원가입'
      })}
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
                      ${Button({
              className: 'header__signup',
              color: BUTTON_COLOR.BLUE,
              content: '회원가입',
              borderType: 'outline',
              onClick: onClickSignup,
            })}
          </div>
        </div>
      </nav>
    </header>
  `;
};

export default Header;
