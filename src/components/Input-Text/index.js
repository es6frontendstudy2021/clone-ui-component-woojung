const InputText = ({
  id,
  title,
  newAccount,
  cancleText = '취소',
  okText = '확인'
} = {}) => {

  const onSubmit = (({ target }) => {
    console.log(target);
  })

  return `
    <input class="form-control mb-2" name="password" type="password" placeholder="password" value={password} onChange={onChange} required />
  `;
};

export default InputText;

