import React from 'react';
import logo from './logo.svg';
import Routes from '@base/routes';
import { AuthProvider } from '@base/contexts/AuthContext';
import GlobalStyles from '@base/components/GlobalStyles/GlobalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles>
        <Routes />
      </GlobalStyles>
    </AuthProvider>
  );
}

export default App;
