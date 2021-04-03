import Input from ".";
import Card from "../Card";
import Gallary, { useGallary } from "../Gallary";
import Row from "../Row";


const inputPropsInfo = {
  type: ['text', 'password', 'number'],
  size: ['middle', 'small', 'large'],
  disabled: [false, true],
  borderless: [false, true],
  placeholder: ['placeholder', ''],
  value: ['', 'value'],
};

const InputGallary = () => {
  const [inputProps, setInputProps] = useGallary('inputProps', inputPropsInfo);

  return `
  ${Card({
    className: 'inputs-gallary gallary',
    title: 'Input',
    children: `
      ${Gallary({ values: inputProps, onChange: setInputProps, info: inputPropsInfo })}
      ${Row({ className: 'result', children: Input({ ...inputProps, children: 'Result' }) })}
    `,
  })}
  `;
};


export default InputGallary;