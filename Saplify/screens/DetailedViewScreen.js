import * as React from 'react';
import {StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
            <View style={styles.container}>
                  <Text style={styles.title}>

                  {route.params.name}</Text>
                  <View style={styles.plant_box}>
                    <Image
                        source={route.params.imageUrl}
                        style={styles.plant_image}
                    >
                    </Image>
                  </View>
                  <View style={styles.plant_desc}>
                    <Text>Price: {writePrice(route.params.price)}</Text>
                    <Text>Description: {route.params.description}</Text>
                  </View>
                  <View style={styles.invisible_box}></View>
                  <Pressable onPress={() => navigation.navigate('Home')} style={styles.back_button}>
                    <Text style={styles.text_button}>Back</Text>
                  </Pressable>
            </View>
        );
}

function writePrice(price){
  if(typeof price == 'number'){
    return (price + " kr")
  }
    else {
      return (price)
    }
}
export default DetailedAboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#4B7156",
 },
 title: {
  marginBottom: 24,
  paddingVertical: 8,
  backgroundColor: "#E6E6EF",
  color: "#20232a",
  fontSize: 30,
  fontWeight: "bold",
  fontStyle: "italic",
  borderBottomLeftRadius: 22,
  borderBottomRightRadius: 22,
  borderTopLeftRadius: 22,
  borderTopRightRadius: 22,
  textAlign: "center"
},
  plant_box: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  plant_desc: {
    backgroundColor: "#C4C4C4",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
  plant_image: {
    resizeMode: "contain",
    height: 300
  },
  back_button: {
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: "#C4C4C4",
    paddingVertical: 8,
    textAlign: "center",
    marginTop: 16,
  },
  invisible_box: {
    flex: 1,
  },
  text_button: {
    paddingHorizontal: 15,
    textAlign: "center",
  }
});
