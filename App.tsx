import React, { Component } from 'react';
import HomePage from './app/views/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import createNativeStackNavigator from './app/createNativeStackNavigator';
import ProductDetailScreen from './app/views/ProductDetailScreen';
import ProductCartScreen from './app/views/ProductCartScreen';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCartShopping, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        var iconName: IconDefinition

        if (route.name === 'Home') {
          iconName = focused
            ? faHome
            : faHome;
        } else {
          iconName = focused ? faCartShopping : faCartShopping;
        }

        // You can return any component that you like here!
        return <FontAwesomeIcon icon={iconName} size={25} color={theme.colors.black} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={ProductCartScreen} />
    </Tab.Navigator>
  );
}

export default class HelloWorldApp extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={productStore}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={ProductDetailScreen} />
                <Stack.Screen name="Cart" component={ProductCartScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}