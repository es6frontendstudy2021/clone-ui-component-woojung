import { getUniqueId } from "../../../lib/id";
import { setComponentAttributes } from "../../../lib/react";

const Button = ({ children, onClick = () => {} }) => {
  const reactId = getUniqueId();

  setComponentAttributes({
    reactId,
    attributes: {onclick: () => onClick()},
  });

  return `
    <button class="Button" data-reactid="${reactId}">
      ${children}
    </button>
  `;
};

export default Button;
