import Button, { BUTTON_COLOR, BUTTON_TYPE } from '../Button';
import { firebaseInstatnce, authService } from '../../firebase';

const ModalAuth = ({
  id,
  title,
  newAccount,
} = {}) => {
  const onSocialClick = async () => {
    const provider = new firebaseInstatnce.auth.GoogleAuthProvider();

    setTimeout(() => {
      authService.signInWithPopup(provider);
    }, 500)
  };
  const onAuthValid = ((e) => {
    e.preventDefault();
    const authForm = document.querySelector('.auth-form')
    const email = authForm.email.value;
    const password = authForm.password.value;

    console.log(email, password);
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const emailValid = emailRegExp.test(email);

    const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;
    const passwordValid = passwordRegExp.test(password);
    //  6 ~ 10자 영문, 숫자 조합

    if (emailValid && passwordValid) {
      console.log('성공!!!');

      try {
        let data;
        if (newAccount) {
          //회원가입
          data = authService.createUserWithEmailAndPassword(email, password)
        } else {
          //로그인
          data = authService.signInWithEmailAndPassword(email, password);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }

    } else {
      console.log(emailValid);
      console.log(passwordValid);
      alert('실패')
      return false;
    }
  })

  return `
    <div class="modal fade" id="${id}" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
            <form class="auth-form">
              <input class="form-control mb-2" name="email" type="email" placeholder="이메일 주소" value='' required />
              <input class="form-control mb-2" name="password" type="password" placeholder="비밀번호(6 ~ 10자 영문, 숫자 조합)" value='' minlength="6" maxlength="10" required />
               ${Button({
    className: 'w-100',
    color: BUTTON_COLOR.BLUE,
    content: `${newAccount ? '회원가입' : '로그인'}`,
    type: BUTTON_TYPE.SUBMIT,
    onClick: onAuthValid,
  })}
            </form>
              <hr />
          <div>
            ${Button({
    className: 'w-100',
    color: BUTTON_COLOR.BLUE,
    // borderType: 'outline',
    content: `Google 계정으로 ${newAccount ? '회원가입' : '로그인'} 하기`,
    onClick: onSocialClick,
  })}
          </div>

          </div>
        </div>
      </div>
    </div>
  `;
};

export default ModalAuth;

