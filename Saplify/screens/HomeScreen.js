import * as React from 'react';
import { StyleSheet, TextInput, Text, View, SafeAreaView, FlatList} from 'react-native';

import PlantsList from '../components/PlantsList';

const plantData = [
  {key: '1', name: 'Sapling', imageUrl: require('../assets/images/sap4.jpg'), price: "trade", description: "New Sapling from my something-plant (I have no idea, see image). Trade for any sturdy plant (they keep drying up when I leave on vacation)"},
  {key: '2', name: 'Flower', imageUrl: require('../assets/images/sap2.png'), price: 10, description: "Selling my only plant as I realised they spread 5g"},
  {key: '3', name: 'Sap', imageUrl: require('../assets/images/sap3.png'), price: 20, description: "I don't want to write a description"},
  {key: '4', name: 'Carrot', imageUrl: require('../assets/images/sap1.png'), price: 12, description: "Orange carrot."},
  {key: '5', name: 'Sap', imageUrl: require('../assets/images/sap3.png'), price: 15, description: "A plant cutting"},
  {key: '6', name: 'Sap', imageUrl: require('../assets/images/sap2.png'), price: 1, description: "我是非常累"},
  {key: '7', name: 'Sap', imageUrl: require('../assets/images/sap1.png'), price: 1, description: "4"}
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
    flex: 2,
  },
  input: {
    backgroundColor: "#FFEEE2"
  }
});
