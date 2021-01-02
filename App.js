import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <Routes />
    </>
  );
};

export default App;
