import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <SignIn />

    <GlobalStyle />
  </>
);

export default App;
