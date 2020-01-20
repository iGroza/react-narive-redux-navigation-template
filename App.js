import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/Navigation/Navigation';
import store from './src/Store/store';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store = {store}>
        <Navigation/>
      </Provider>
    </>
  );
};

export default App;
