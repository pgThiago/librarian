import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
        <Routes />
    </>
  );
};

export default App;
