import Card from ".";
import Gallary, { useGallary } from "../Gallary";
import Row from "../Row";


const cardPropsInfo = {
  size: ['default', 'small'],
  bordered: [true, false],
  title: ['Card Title', null],
};

const CardGallary = () => {
  const [cardProps, setCardProps] = useGallary('cardProps', cardPropsInfo);

  return `
    ${Card({
      className: 'cards-gallary',
      title: 'Card',
      children: `
        ${Gallary({ values: cardProps, onChange: setCardProps, info: cardPropsInfo })}
        ${Row({ children: Card({ ...cardProps, children: 'Result' })})}
      `,
    })}
  `;
};


export default CardGallary;
