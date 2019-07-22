import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';

const ShopNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const NavigationBottom = createBottomTabNavigator(
  {
    Home: {
      screen: ShopNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={25} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#ff989b',
      inactiveTintColor: '#e0e0e0',
      style: {
        height: 60,
        backgroundColor: '#FFF',
      },
      tabStyle: {
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(NavigationBottom);
