import styled from 'styled-components';
import Colors from './Colors';

const Title = styled.h1`
  color: ${Colors['neon-green']};
  font-size: 14px;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 340px;
  min-height: 200px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors['dark-grayish-blue']};
  border-radius: 15px;
  position: relative;
  margin-top: -20px;
  @media (min-width: 768px) {
    width: 540px;
    min-height: 330px;
  }
`;

const Quote = styled.p`
  text-align: center;
  color: ${Colors['light-cyan']};
  line-height: 35px;
  font-size: 28px;
  margin: 15px;
`;

const Dice = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${Colors['neon-green']};
  padding: 18px 0;
  position: absolute;
  bottom: calc(-60px / 2);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  :hover,
  :active {
    box-shadow: 0 0 30px 0 ${Colors['neon-green']};
  }
`;

const Divider = styled.picture`
  margin: 15px 0 30px 0;
`;

const AdviceStyle = {
  Title: Title,
  Container: Container,
  Quote: Quote,
  Dice: Dice,
  Divider: Divider,
};

export default AdviceStyle;
