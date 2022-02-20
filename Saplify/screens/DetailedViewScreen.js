import * as React from 'react';
import {ScrollView, Text, View, Button, Image, Pressable } from 'react-native';
import {styles} from "../assets/StyleSheet.js";

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
          <View style={styles.container}>
            <ScrollView style={styles.container}>
                  <Text style={styles.title}>
                  {route.params.name}</Text>
                  <View style={styles.plantBox}>
                    <Image
                        source={{uri:route.params.imageUrl}}
                        style={styles.plant_image}
                    >
                    </Image>
                  <Text>{route.params.imageUrl}</Text>
                  </View>
                  <View style={styles.plantDesc}>
                    <Text><Text style={{fontWeight: "bold"}}>Price: </Text>{writePrice(route.params.price)}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Contact: </Text>{route.params.phone} or {route.params.email}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Description: </Text>{route.params.description}</Text>
                  </View>
                  <View style={styles.invisibleBox}></View>
                  <View style={styles.locationDesc}>
                    <Text><Text style={{fontWeight: "bold"}}>Location: </Text>{route.params.location}</Text>
                  </View>
                  <View style={styles.locationBox}>
                  <Image
                        source={route.params.map}
                        style={styles.plant_image}
                    ></Image>
                    
                  </View>
            </ScrollView>
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
