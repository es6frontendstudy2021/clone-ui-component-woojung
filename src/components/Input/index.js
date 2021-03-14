import { getUniqueId } from "../../../lib/id";
import { getElementByReactId, onRender, setComponentAttributes } from "../../../lib/react";

let isFocused = false;

const Input = ({ value, onChange }) => {
  if (typeof value !== 'undefined' && typeof value !== 'string' && typeof value !== 'number') {
    throw new Error('value must be string type');
  }
  if (typeof onChange !== 'undefined' && typeof onChange !== 'function') {
    throw new Error('onChange must be string type');
  }

  const reactId = getUniqueId();

  onRender(() => {
    if (isFocused) {
      const input = getElementByReactId(reactId)
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });

  setComponentAttributes({
    reactId,
    attributes: { onkeyup: ({ target, key }) => {
      if (value === undefined && onChange === undefined) {
        return;
      }
      if (onChange === undefined) {
        target.value = value;
        return;
      }
      onChange(target.value);
      isFocused = true;
    }},
  });
  return `<input data-reactid="${reactId}" value="${value}" />`;
};

export default Input;
