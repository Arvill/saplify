import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function({item, navigation}) {
    return <View key={item.key} style={StyleSheet.gridbox}>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('DetailedView')}>
                    <View>
                      <Text>
                        {item.name}
                      </Text>  
                      <Image
                        source={item.imageUrl}
                      >
                      </Image> 
                    </View>
              </TouchableOpacity>
           </View>    
}

const styleSheet = StyleSheet.create({
 
  gridbox: {
    flex: 1,
    width: 7,
    height: 75,
    margin: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  }
});