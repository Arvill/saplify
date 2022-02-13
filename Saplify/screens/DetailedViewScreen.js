import * as React from 'react';
import {StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import {styles} from "../assets/StyleSheet.js";

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
            <View style={styles.container}>
                  <Text style={styles.title}>

                  {route.params.name}</Text>
                  <View style={styles.plantBox}>
                    <Image
                        source={route.params.imageUrl}
                        style={styles.plant_image}
                    >
                    </Image>
                  </View>
                  <View style={styles.plantDesc}>
                    <Text>Price: {writePrice(route.params.price)}</Text>
                    <Text>Description: {route.params.description}</Text>
                  </View>
                  <View style={styles.invisibleBox}></View>
                  <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                    <Text style={styles.textButton}>Back</Text>
                  </Pressable>
            </View>
        );
}

function writePrice(price){
  return (typeof price == 'number' ? (price + " kr") : (price))
}
export default DetailedAboutScreen;
