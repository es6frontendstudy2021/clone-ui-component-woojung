import { SpinDot } from "../../icons";
import './style.scss';

const getClass = ({ spinning }) => {
  const classList = [];
  if (spinning) classList.push('ant-spin-spinning');
  return classList.join();
};

const Spin = ({ indicator = SpinDot, spinning = true }) => {
  return `
    <div class="ant-spin ${getClass({ spinning })}">
      ${indicator}
    </div>
  `;
};

export default Spin;
