import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStackScreen from './screens/HomeStackScreen';
import AboutScreen from './screens/AboutScreen';
import NewItemScreen from './screens/NewItemScreen';
import HomeHeader from './components/HomeHeader';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [isSearching, setIsSearching] = React.useState(false);
  return (
/*     <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailedView" component={DetailedViewScreen} />
          <Stack.Screen name="NewItem" component={NewItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View> */
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeStack">
          <Drawer.Screen name="HomeStack" 
                                          options={{
                                                title: 'Sapling',
                                                headerStyle: {
                                                  backgroundColor: '#9CD353',
                                                },
                                                headerTintColor: '#fff',
                                                headerTitleStyle: {
                                                  fontWeight: 'bold',
                                                },
                                              }} 
                                          component={HomeStackScreen} />
          <Drawer.Screen name="About"
                         component={AboutScreen}
                         //options={{ headerTitle: () => <HomeHeader isSearching={isSearching} setIsSearching={setIsSearching}/>}} 
                         />
          <Drawer.Screen name="NewItem" component={NewItemScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;