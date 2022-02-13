import * as React from 'react';
import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {styles} from "../assets/StyleSheet.js";

const NewItemScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const uploadPicture = ()=> {
      console.log("TODO: Create backend")
    }

        return (
            <View style={styles.container}>
            <Text style={styles.title}>

            New Plant</Text>
                <View style={styles.newItemBox}>
                    <Text style={styles.newItemHeader}>Plant:</Text>
                    <TextInput
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Price:</Text>
                    <TextInput
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Phone:</Text>
                    <TextInput
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>E-Mail:</Text>
                    <TextInput
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Location:</Text>
                    <TextInput
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Description:</Text>
                    <TextInput
                        style={styles.newItemInput}
                    />
                    <Pressable onPress={pickImage} style={styles.newItemAddPicture}>
                      <Text style={styles.textButton}>Add Picture</Text>
                    </Pressable>
                    <Pressable onPress={uploadPicture} style={styles.backButton}>
                      <Text style={styles.textButton}>Submit</Text>
                    </Pressable>
                    <StatusBar style="auto" />
                </View>
                <View style={styles.invisibleBox}></View>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                  <Text style={styles.textButton}>Back</Text>
                </Pressable>
            </View>
        );
}
export default NewItemScreen;
