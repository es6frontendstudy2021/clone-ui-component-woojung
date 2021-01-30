import Button, { BUTTON_COLOR } from '../Button';
import { firebaseInstatnce, authService } from '../../firebase';

const AuthModal = ({
  id,
  title,
  newAccount,
  cancleText = '취소',
  okText = '확인'
} = {}) => {
  const onSocialClick = async ({ target }) => {
    console.log(firebaseInstatnce);
    const provider = new firebaseInstatnce.auth.GoogleAuthProvider();

    console.log(provider);
    setTimeout(() => {
      authService.signInWithPopup(provider);
    }, 500)
  };

  const onSubmit = (({target}) => {
    console.log(target);
  })

  return `
    <div class="modal fade" id="${id}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">${ title }</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
            <form onSubmit="onSubmit">
              <input class="form-control mb-2" name="email" type="email" placeholder="email" value={email} onChange={onChange} required />
              <input class="form-control mb-2" name="password" type="password" placeholder="password" value={password} onChange={onChange} required />
               ${Button({
                className: 'w-100',
                color: BUTTON_COLOR.YELLOW,
                // borderType: 'outline',
                content: `${newAccount ? '회원가입' : '로그인'}`,
                onClick: onSubmit,
              })}
            </form>
              <hr />
          <div>
            ${Button({
    className: 'w-100',
    color: BUTTON_COLOR.YELLOW,
    // borderType: 'outline',
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

export default AuthModal;

