import React from 'react';
import {StatusBar} from 'react-native';

import Router from './routes';

const App = () => (
  <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#22272E'} />
    <Router />
  </>
);

export default App;
