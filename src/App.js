//libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
//custom components
import GlobalStyle from './components/GlobalStyle';
import Advice from './components/Advice';
import Attribution from './components/Attribution';
//DOM el
const container = document.getElementById('root');
const root = createRoot(container);

createRoot;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Advice />
      <Attribution />
    </React.Fragment>
  );
};

root.render(<App />);
