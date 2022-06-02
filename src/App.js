//libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
//custom components
import GlobalStyle from './components/GlobalStyle';
//DOM el
const container = document.getElementById('root');
const root = createRoot(container);

createRoot;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
    </React.Fragment>
  );
};

root.render(<App />);
