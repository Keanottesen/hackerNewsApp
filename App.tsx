import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MainNavigator from './src/navigation/MainNavigator';
import { store, persistor } from './src/reduxStore';

const App: React.FC = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainNavigator />
          </PersistGate>
      </Provider>
  );
};

export default App;
