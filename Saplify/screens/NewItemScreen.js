import * as React from 'react';
import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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

        return (
            <View>
                <Button onPress={() => navigation.navigate('Home')} title="Home">
                </Button>
                <View>
                    <Text style={styles.gen}>Plant:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.gen}>Price:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.gen}>Phone:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.gen}>E-Mail:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.gen}>Location:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.gen}>Description:</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Button onPress={pickImage} title="Add Picture"></Button>
                    <Text style={styles.gen}></Text>
                    <Button title="Submit"></Button>
                    <StatusBar style="auto" />
                </View>
            </View>
        );
}
export default NewItemScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4B644A'
    },
    input: {
      backgroundColor: "#FFEEE2",
      margin: 5
    },
    gen: {
        margin: 10
    }
  });
