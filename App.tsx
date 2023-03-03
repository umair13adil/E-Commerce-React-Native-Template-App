import React, { Component } from 'react';
import HomePage from './app/views/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import  createNativeStackNavigator  from './app/createNativeStackNavigator';
import ProductDetailScreen from './app/views/ProductDetailScreen';
import { productStore } from './app/store/productStore'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

export default class HelloWorldApp extends Component {

  render() {
    return (
      <Provider store={productStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Details" component={ProductDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}