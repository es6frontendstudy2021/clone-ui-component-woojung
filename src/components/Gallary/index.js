import { useState } from "../../../lib/react";
import Button from "../Button";
import Row from "../Row";

export const useGallary = (useStateKey, info) => {
  const keys = Object.keys(info);
  const initProps = Object.fromEntries(keys.map(key => [key, info[key][0]]));
  const [values, setValues] = useState(useStateKey, initProps);
  
  return [values, setValues];
};

const Gallary = ({ info, values, onChange }) => {
  const keys = Object.keys(info);
  return keys.map(key => `
    ${Row({ children: `<label>${key}: </label>` + info[key].map(value => `
      ${Button({
        type: values[key] === value ? 'primary' : 'default',
        children: value === null ? 'null' : value.toString(),
        onClick: () => onChange({ ...values, [key]: value })
      })}
    `).join('') })}
  `).join('');
}

export default Gallary;


