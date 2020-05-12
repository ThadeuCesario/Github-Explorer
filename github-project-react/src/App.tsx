import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App:React.FC = () => (
  <React.Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle/>
  </React.Fragment>
);

export default App;
