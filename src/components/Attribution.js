import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  left: calc(50% - (${(props) => props.footerWidth / 2}px));
  color: ${Colors['light-cyan']};

  a {
    color: ${Colors['neon-green']};
    ::before,
    ::after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: -4px;
      width: 0;
      height: 2px;
      background-color: ${Colors['neon-green']};
      transition: all 0.2s ease-in-out;
    }
    :hover {
      ::before {
        width: 30px;
      }
    }
  }
`;

const Attribution = () => {
  const [footerRects, setFooter] = useState();

  useEffect(() => {
    setFooter(document.getElementById('footer').getBoundingClientRect());
  }, []);

  return (
    <Footer
      role="footer"
      id="footer"
      footerWidth={Math.round(footerRects?.width ?? 0)}
    >
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noopener noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://www.frontendmentor.io/profile/serfoll"
        rel="noopener noreferrer"
      >
        Sergio Follyvi
      </a>
    </Footer>
  );
};

export default Attribution;
