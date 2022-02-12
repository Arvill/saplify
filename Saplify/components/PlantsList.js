import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function({item, navigation}) {

    return <View key={item.key} >
              <TouchableOpacity
                  onPress={() => navigation.navigate('DetailedView', {price: +item.price, description: item.description, imageUrl: item.imageUrl})} style={styleSheet.gridbox}>
                    <View style={styleSheet.imagebox}>

                      <Image
                        source={item.imageUrl}
                        style={styleSheet.image}
                      >
                      </Image>
                    </View>
                  <View style={styleSheet.textbox}>
                      <View style={styleSheet.titletbox}>
                          <Text style = {styleSheet.title}>
                              {item.description}
                          </Text>
                      </View>
                      <View style={styleSheet.descriptionbox}>
                          <Text style = {styleSheet.description}>
                              {item.description}
                          </Text>
                      </View>
                  </View>
              </TouchableOpacity>
           </View>
}

const styleSheet = StyleSheet.create({

  gridbox: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "50%",

    margin: 2,
    borderRadius: 15,
    backgroundColor: '#9F7E69',
    //justifyContent: 'center',
    //alignItems: 'center',
    textAlign: "center",
  },

  imagebox: {
        flex: 0.7,

  },
  textbox: {
        flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
  },
  title: {
      textAlign: "center",
      fontSize: 25,
  },
  description: {
        textAlign: "center",
        fontSize: 15,
  },
  titlebox: {
        flex: 0.5,
  },
  descriptionbox: {
        flex: 1,
  },
  image: {
      flex: 1,
    width: "100%",
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
    //height: "100%"

  }
});
