import * as React from 'react';
import { View, Text, Button } from 'react-native';
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


/* import * as React from 'react';
import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="AboutScreen" 
        component={AboutScreen} 
        options={{ title: 'About' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
} */

/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.boxImage}>
        <Image
        source={require('./assets/images/sap1.png')}
        style={styles.image}
        />

      </View>
      <View style={styles.boxText}>
        <Text>Price: xx kr</Text>
        <Text>Description: here comes the description, it can be quite long and must be handled as a long text</Text>
        <StatusBar style="auto" />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  boxImage: {
    flex: 2,
  },
  boxText: {
    flex: 2
  }
});
 */