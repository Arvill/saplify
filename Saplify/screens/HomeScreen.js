import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList} from 'react-native';

import PlantsList from '../components/PlantsList';

const HomeScreen = ({ navigation }) => {
  return (
        <View style={styles.container}> 
          <FlatList
                    data={[
                      {key: '1', name: 'sap',imageUrl: require('../assets/images/sap1.png')},
                      {key: '2', name: 'sap', imageUrl: require('../assets/images/sap2.png')},
                      {key: '3', name: 'sap', imageUrl: require('../assets/images/sap3.png')},
                      {key: '4', name: 'sap', imageUrl: require('../assets/images/sap1.png')},
                      {key: '5', name: 'sap', imageUrl: require('../assets/images/sap3.png')},
                      {key: '6', name: 'sap', imageUrl: require('../assets/images/sap2.png')},
                      {key: '7', name: 'sap', imageUrl: require('../assets/images/sap1.png')}
                    ]}
                    renderItem={({item}) => PlantsList({item, navigation})}
          />  
        </View>
  );
};

export default HomeScreen;

/* export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>  
              <FlatList
                data={[
                  {key: '1', name: 'sap',imageUrl: require('../assets/images/sap1.png')},
                  {key: '2', name: 'sap', imageUrl: require('../assets/images/sap2.png')},
                  {key: '3', name: 'sap', imageUrl: require('../assets/images/sap3.png')},
                  {key: '4', name: 'sap', imageUrl: require('../assets/images/sap1.png')},
                  {key: '5', name: 'sap', imageUrl: require('../assets/images/sap3.png')},
                  {key: '6', name: 'sap', imageUrl: require('../assets/images/sap2.png')},
                  {key: '7', name: 'sap', imageUrl: require('../assets/images/sap1.png')}
                ]}
                renderItem={({item}) => PlantsList({item, props})}
              />      
              <View style={styles.boxImage}>
                <Image
                source={require('../assets/images/sap1.png')}
                style={styles.image}
                />     
              </View>
              <View style={styles.boxText}>
              <Button
                  title="About"
                  onPress={() => this.props.navigation.navigate('About')}
                />
                                <Button
                  title="NewItem"
                  onPress={() => this.props.navigation.navigate('NewItem')}
                /> 
                                <Button
                  title="DetailedView"
                  onPress={() => this.props.navigation.navigate('DetailedView')}
                />    
                <Text>Price: xx kr</Text>
                <Text>Description: here comes the description, it can be quite long and must be handled as a long text</Text>
                <StatusBar style="auto" />
              </View>              
            </View>
          );
    }
} */

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
