import React, { Component } from 'react';
import HomePage from './app/views/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import createNativeStackNavigator from './app/createNativeStackNavigator';
import ProductDetailScreen from './app/views/ProductDetailScreen';
import { productStore } from './app/store/product/ProductStore'
import { Provider } from 'react-redux'
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';

import { theme, darkTheme, Theme } from './app/globals/Theme';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default class HelloWorldApp extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={productStore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Details" component={ProductDetailScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}