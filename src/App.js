// App.js

import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={Store}>
      <Counter />
    </Provider>
  );
}

export default App;
