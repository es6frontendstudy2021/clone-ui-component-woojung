const { default: Modal } = require('../Modal');

const AddGroupModal = ({ onOk, onCancel }) => {
  return Modal({
    title: '그룹 추가',
    className: 'group-list__add-group-modal',
    headerClassName: 'add-group-modal__header',
    body: `
      <form novalidate>
        <div class="mb-3">
          <label for="groupName" class="form-label">그룹 이름</label>
          <input type="text" class="form-control" id="groupName" required>
          <div class="invalid-feedback">
            그룹 이름을 입력해주세요.
          </div>
        </div>
      </form>
    `,
    onOk: ({ target }) => {
      const $modal = target.closest('.modal');
      const $form = $modal?.querySelector('form');
      const $groupNameInput = $form.querySelector('#groupName');
      const { value = '' } = $groupNameInput;
      if (!value.length) {
        $form.classList.add('was-validated');
        return;
      }
      const newGroup = {
        id: Date.now(),
        name: value,
        places: [],
      };
      onOk && onOk({ group: newGroup });
    },
    onCancel: ({ target }) => {
      const $modal = target.closest('.modal');
      const $form = $modal?.querySelector('form');
      $form.classList.remove('was-validated');
      
      const $groupNameInput = $form.querySelector('#groupName');
      $groupNameInput.value = '';
      onCancel && onCancel();
    }
  })
}

export default AddGroupModal;
