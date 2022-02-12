import * as React from 'react';
import { StyleSheet, TextInput, Text, View, SafeAreaView, FlatList} from 'react-native';

import PlantsList from '../components/PlantsList';

const plantData = [
  {key: '1', name: 'sapling', imageUrl: require('../assets/images/sap1.png'), price: 1, description: "New Sapling"},
  {key: '2', name: 'flower', imageUrl: require('../assets/images/sap2.png'), price: 10, description: "Floweeeeeeeeeeeeeeeeeeeeeeeeeeeer"},
  {key: '3', name: 'sap', imageUrl: require('../assets/images/sap3.png'), price: 20, description: "1"},
  {key: '4', name: 'carrot', imageUrl: require('../assets/images/sap1.png'), price: 12, description: "Orange carrot."},
  {key: '5', name: 'sap', imageUrl: require('../assets/images/sap3.png'), price: 15, description: "2"},
  {key: '6', name: 'sap', imageUrl: require('../assets/images/sap2.png'), price: 1, description: "3"},
  {key: '7', name: 'sap', imageUrl: require('../assets/images/sap1.png'), price: 1, description: "4"}
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
                    numColumns={1}
                    key={item => item.key}
                    renderItem={({item}) => PlantsList({item, navigation, text})}
                    ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
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
