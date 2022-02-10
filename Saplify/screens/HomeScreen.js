import * as React from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, FlatList} from 'react-native';

import PlantsList from '../components/PlantsList';

const plantData = [
  {key: '1', name: 'sapling',imageUrl: require('../assets/images/sap1.png')},
  {key: '2', name: 'flower', imageUrl: require('../assets/images/sap2.png')},
  {key: '3', name: 'sap', imageUrl: require('../assets/images/sap3.png')},
  {key: '4', name: 'carrot', imageUrl: require('../assets/images/sap1.png')},
  {key: '5', name: 'sap', imageUrl: require('../assets/images/sap3.png')},
  {key: '6', name: 'sap', imageUrl: require('../assets/images/sap2.png')},
  {key: '7', name: 'sap', imageUrl: require('../assets/images/sap1.png')}
]

const HomeScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState(plantData);
  
  return (
      <SafeAreaView>
        <View style={styles.container}> 
          <TextInput 
            style={styles.input}
            onChangeText={(t) => {
                                    setText(t);            
                                    setData(plantData.filter((item) => (item.name.includes(t.toLowerCase()))))
                                  }
                          }
            value={text}
            placeholder="Search for a plant"
          />
          <FlatList
                    data={data}
                    keyExtractor={item => item.key}
                    numColumns={2}
                    key={item => item.key}
                    renderItem={({item}) => PlantsList({item, navigation, text})}
          />  
        </View>
      </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B644A'
  },
  image: {
    width: '50vw',
    height: '100%'
  },
  boxImage: {
    flex: 2,
  },
  boxText: {
    flex: 2
  },
  input: {
    backgroundColor: "#FFEEE2"
  }
});
