import * as React from 'react';
import {StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import styles from "./assets/StyleSheet.js";

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
