import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
