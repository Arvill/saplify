import * as React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Image} from 'react-native';

import HomeStackScreen from './screens/HomeStackScreen';
import AboutScreen from './screens/AboutScreen';
import NewItemScreen from './screens/NewItemScreen';


const Drawer = createDrawerNavigator();

function App() {
  //const [isSearching, setIsSearching] = React.useState(false);
  return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="HomeStack" options={{
                headerTitle: () => (<Image style = {{ height: "70%", alignSelf: "center", resizeMode: "contain", marginRight:50}} source={require('./assets/images/logo-w.png')} />),
                title: "home",
                headerStyle: {
                    backgroundColor: '#9CD353',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
                                          component={HomeStackScreen}>
            </Drawer.Screen>
            <Drawer.Screen name="About"
                         component={AboutScreen}
                         /* options={{ headerTitle: () => <HomeHeader isSearching={isSearching} setIsSearching={setIsSearching}/>,
                         headerRight: (
                          navigation.getParam('search') === 1 ?
                          <TouchableOpacity onPress={() => navigation.setParams({search: 0})} style={{ marginHorizontal: 10 }}>
                               <Text>Tetxttg</Text>
                          </TouchableOpacity>
                          :
                          <Text>My Search Bar</Text>
                      )}}  */
                         />
            <Drawer.Screen name="NewItem" component={NewItemScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
  );
}

export default App;
