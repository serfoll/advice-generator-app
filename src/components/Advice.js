import { useEffect, useState } from 'react';

//custom components
import AdviceStyle from './AdviceStyle';

//IMAGES
const dividerDesktop = new URL(
  '../images/pattern-divider-desktop.svg',
  import.meta.url
);
const dividerMobile = new URL(
  '../images/pattern-divider-mobile.svg',
  import.meta.url
);
const diceIcon = new URL('../images/icon-dice.svg', import.meta.url);

const Advice = () => {
  const [newAdvice, setAdvice] = useState({});

  const fetchRandomAdvice = async () => {
    const randAdvice = await fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .catch((err) => err);

    setAdvice(randAdvice.slip);
  };

  useEffect(() => {
    fetchRandomAdvice();
  }, []);

  const getAdvice = (e) => {
    e.preventDefault();
    console.log('clicked');

    fetchRandomAdvice();
  };

  return (
    <AdviceStyle.Container>
      <AdviceStyle.Title>Advice #{newAdvice.id}</AdviceStyle.Title>
      <AdviceStyle.Quote>"{newAdvice.advice}"</AdviceStyle.Quote>

      <AdviceStyle.Divider>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <source media="(max-width: 767px)" srcSet={dividerMobile} />
        <img src={dividerDesktop} alt="divider image" />
      </AdviceStyle.Divider>

      <AdviceStyle.Dice
        onClick={(e) => {
          getAdvice(e);
        }}
      >
        <img src={diceIcon} alt="dice icon" />
      </AdviceStyle.Dice>
    </AdviceStyle.Container>
  );
};
export default Advice;
