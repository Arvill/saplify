import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function({item, navigation}) {
    return <View key={item.key} style={styleSheet.gridbox}>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('DetailedView', {price: +item.price, description: item.description, imageUrl: item.imageUrl})}>
                    <View>
                      <Text>
                        {item.name}
                      </Text>  
                      <Image
                        source={item.imageUrl}
                        style={styleSheet.image}
                      >
                      </Image> 
                    </View>
              </TouchableOpacity>
           </View>    
}

const styleSheet = StyleSheet.create({
 
  gridbox: {
    flex: 1,
    width: "100%",
    //height: 7,
    margin: 2,
    backgroundColor: '#9F7E69',
    //justifyContent: 'center',
    //alignItems: 'center',
    textAlign: "center"
  },

  image: {
    width: "100%",
    //height: "100%"
  }
});