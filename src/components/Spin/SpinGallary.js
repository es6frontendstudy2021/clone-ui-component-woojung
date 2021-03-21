import Spin from ".";
import { LoadingOutlined } from "../../icons";
import Card from "../Card";
import Gallary, { useGallary } from "../Gallary"
import Row from "../Row";

const spinPropsInfo = {
  indicator: [null, LoadingOutlined],
};

const SpinGallary = () => {
  const [spinProps, setSpinProps] = useGallary('spinProps', spinPropsInfo);
  return `
    ${Card({
      className: 'spins-gallary',
      title: 'Spin',
      children: `
        ${Gallary({ values: spinProps, onChange: setSpinProps, info: spinPropsInfo })}
        ${Row({ className: 'result', children: Spin({ ...spinProps, children: 'Result' }) })}
      `,
    })}
  `;
}

export default SpinGallary;
