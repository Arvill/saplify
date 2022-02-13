import * as React from 'react';
import { StyleSheet, TextInput, Text, View, SafeAreaView, FlatList} from 'react-native';
import {styles} from "../assets/StyleSheet.js";

import PlantsList from '../components/PlantsList';

const plantData = [

  {key: '1', name: 'Sapling', imageUrl: require('../assets/images/sap4.jpg'), price: "trade", description: "New Sapling from my something-plant (I have no idea, see image). Trade for any sturdy plant.", contact: "+46735448218"},
  {key: '2', name: 'Flower', imageUrl: require('../assets/images/sap2.png'), price: 10, description: "Selling my only plant as I realised they spread 5g", contact: "+46735448218"},
  {key: '3', name: 'Beautiful sapling', imageUrl: require('../assets/images/sap3.png'), price: 20, description: "I have a big plant and I can give some saplings for 20kr.", contact: "+46735448218"},
  {key: '4', name: 'Phyllostachys aurera', imageUrl: require('../assets/images/sap1.png'), price: 12, description: "Amazing Phyllostachys aurera easy to care of in an apartment.", contact: "+46735448218"},
  {key: '5', name: 'Ficus', imageUrl: require('../assets/images/sap3.png'), price: 15, description: "A nice ficus cutting for only 15kr. Contact me asap!", contact: "+46735448218"},
  {key: '6', name: 'Spear plant', imageUrl: require('../assets/images/sap2.png'), price: 30, description: "我是非常累", contact: "+46735448218"},
  {key: '7', name: 'Calathea "White Fusion"', imageUrl: require('../assets/images/sap1.png'), price: 45, description: "My calathea 'White Fusion' I bought 5 years ago is so big, I sell some cuttings of it :)", contact: "+46735448218"}

]

const HomeScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState(plantData);

  return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(t) => {
                                    setText(t);
                                    setData(plantData.filter((item) => ((item.name.toLowerCase() ).includes(t.toLowerCase()))))
                                  }
                          }
            value={text}
            placeholder="Search for a plant"
          />
          <FlatList
                 style={styles.homeList}
                    data={data}
                    keyExtractor={item => item.key}
                    numColumns={1}
                    key={item => item.key}
                 ListHeaderComponent={() => <View style={{height: 70}}></View>}
                    renderItem={({item}) => PlantsList({item, navigation, text})}
                    ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
          />
        </View>
      </SafeAreaView>
  );
};

export default HomeScreen;
