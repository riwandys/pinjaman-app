import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import NavigationContainer from './navigation/NavigationContainer';
import TransactionListScreen from './screens/TransactionListScreen';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
    // <TransactionListScreen />
  );
}

