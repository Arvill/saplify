import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NewItemScreen from './screens/NewItemScreen';
import DetailedViewScreen from './screens/DetailedViewScreen';

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

function App() {
  const ref = React.useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailedView" component={DetailedViewScreen} />
          <Stack.Screen name="NewItem" component={NewItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
/*         <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer> */
  );
}

export default App;