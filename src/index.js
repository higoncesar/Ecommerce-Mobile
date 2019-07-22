import '~/config/ReactotronConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import store from '~/store';
import Routes from '~/routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <FlashMessage position="top" />
      </Provider>
    );
  }
}
