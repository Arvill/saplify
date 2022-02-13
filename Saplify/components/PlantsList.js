import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function({item, navigation}) {
    return <View key={item.key} >
              <TouchableOpacity
                  onPress={() => navigation.navigate('DetailedView',
                  {price: item.price, description: item.description, imageUrl: item.imageUrl, name: item.name, phone: item.phone, email: item.email, location: item.location})}
                  style={styleSheet.gridbox}>
                    <View style={styleSheet.imagebox}>

                      <Image
                        source={item.imageUrl}
                        style={styleSheet.image}
                      >
                      </Image>
                    </View>
                  <View style={styleSheet.textbox}>
                      <View style={styleSheet.titletbox}>
                          <Text numberOfLines={2} style = {styleSheet.title}>
                              {item.name}
                          </Text>
                      </View>
                      <View style={styleSheet.descriptionbox}>
                          <Text numberOfLines={2} style = {styleSheet.description}>
                              <Text style={{fontWeight: "bold"}}>Price: </Text> {writePrice(item.price)}
                          </Text>
                      </View>
                      <View style={styleSheet.descriptionbox}>
                          <Text  numberOfLines={3}  style = {styleSheet.description}>
                              <Text style={{fontWeight: "bold"}}>Description: </Text>{item.description}
                          </Text>
                      </View>
                      <View style={styleSheet.descriptionbox}>
                          <Text  numberOfLines={3}  style = {styleSheet.description}>
                              Contact:
                              {"\n"} {item.phone}
                          </Text>
                      </View>
                  </View>
              </TouchableOpacity>
           </View>
}

function writePrice(price){
  return (typeof price == 'number' ? (price + " :-") : (price))
}

const styleSheet = StyleSheet.create({

  gridbox: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    backgroundColor: '#9F7E69',
    //justifyContent: 'center',
    //alignItems: 'center',

  },

  imagebox: {
    flex: 1,
      top:0,
      bottom:0,
        width: "50%",
      height: "100%"
  },
  textbox: {
        flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
  },
  title: {
      textAlign: "center",
      fontSize: 25,
      marginBottom:10,
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
      width: "100%",
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,

      height: 175

  }
});
