import Button from ".";
import Card from "../Card";
// import Loading from "../Loading";
import Row from "../Row";
import Gallary, { useGallary } from '../Gallary';
import Spin from "../Spin";

const buttonPropsInfo = {
  type: ['primary', 'default', 'dashed', 'text', 'link'],
  shape: ['default', 'circle', 'round'],
  size: [ 'middle', 'large', 'small'],
  loading: [false, true],
  disabled: [false, true],
  danger: [false, true],
  ghost: [false, true],
  block: [false, true],
  href: [null, '#buttons-gallary'],
  htmlType: ['button', 'submit'],
  icon: [null, `${Spin({ spinning: false })}`],
  target: [null, `_blank`, `_self`, `_parent`, `_top`],
};

const ButtonGallary = () => {
  const [buttonProps, setButtonProps] = useGallary('buttonProps', buttonPropsInfo);

  return `
    ${Card({
      className: 'buttons-gallary',
      title: 'Button',
      children: `
        ${Gallary({ values: buttonProps, onChange: setButtonProps, info: buttonPropsInfo })}
        ${Row({ className: 'result', children: Button({ ...buttonProps, children: 'Result' }) })}
      `,
    })}
  `;
};


export default ButtonGallary;
