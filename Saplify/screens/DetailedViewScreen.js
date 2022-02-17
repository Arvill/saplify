import * as React from 'react';
import {ScrollView, Text, View, Button, Image, Pressable } from 'react-native';
/* import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; */
import {styles} from "../assets/StyleSheet.js";

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
          <View style={styles.container}>
{/*             <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/> */}
            <ScrollView style={styles.container}>
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
                    <Text><Text style={{fontWeight: "bold"}}>Price: </Text>{writePrice(route.params.price)}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Contact: </Text>{route.params.phone} or {route.params.email}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Description: </Text>{route.params.description}</Text>
                  </View>
                  <View style={styles.invisibleBox}></View>
                  <View style={styles.locationDesc}>
                    <Text><Text style={{fontWeight: "bold"}}>Location: </Text>{route.params.location}</Text>
                  </View>
                  <View style={styles.locationBox}>
{/*                   <MapContainer
      style={{ height: "10px" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer> */}
                    
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
