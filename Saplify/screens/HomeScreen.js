import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>        
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
