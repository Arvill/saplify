import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import NewItemScreen from './NewItemScreen';
import DetailedViewScreen from './DetailedViewScreen';

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (<View style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="Home">
                {/* <Stack.Screen name="About" component={AboutScreen} /> */}
                <Stack.Screen name="Home"  options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="DetailedView"  options={{ headerShown: false }} component={DetailedViewScreen} />
                {/* <Stack.Screen name="NewItem" component={NewItemScreen} /> */}
                </Stack.Navigator>
          </View>
  );
}

export default HomeStackScreen;