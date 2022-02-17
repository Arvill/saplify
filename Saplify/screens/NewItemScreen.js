import * as React from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {styles} from "../assets/StyleSheet.js";
import { Plant } from "../components/Plant.js";
import { dbConfig } from "../firebase_config.js";

const NewItemScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

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

    const uploadPicture = ()=>{
      const plant = new Plant(Math.floor(Math.random()*100000), name, price, phone, email, location, description, image);
      plant.postData();
    }
        return (
            <View style={styles.container}>
            <Text style={styles.title}>New Plant</Text>
                <View style={styles.newItemBox}>
                    <Text style={styles.newItemHeader}>Plant:</Text>
                    <TextInput
                        defaultValue={name}
                        onChangeText={newText => setName(newText)}
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Price:</Text>
                    <TextInput
                        defaultValue={price}
                        onChangeText={newText => setPrice(newText)}
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Phone:</Text>
                    <TextInput
                        defaultValue={phone}
                        onChangeText={newText => setPhone(newText)}
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>E-Mail:</Text>
                    <TextInput
                        defaultValue={email}
                        onChangeText={newText => setEmail(newText)}
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Location:</Text>
                    <TextInput
                        defaultValue={location}
                        onChangeText={newText => setLocation(newText)}
                        style={styles.newItemInput}
                    />
                    <Text style={styles.newItemHeader}>Description:</Text>
                    <TextInput
                        defaultValue={description}
                        onChangeText={newText => setDescription(newText)}
                        style={styles.newItemInput}
                    />
                    <Pressable onPress={pickImage} style={styles.newItemAddPicture}>
                      <Text style={styles.textButton}>Add Picture</Text>
                    </Pressable>
                    <Pressable onPress={uploadPicture} style={styles.staticBackButton}>
                      <Text style={styles.textButton}>Submit</Text>
                    </Pressable>
                    <StatusBar style="auto" />
                </View>
                <View style={styles.invisibleBox}></View>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.staticBackButton}>
                  <Text style={styles.textButton}>Back</Text>
                </Pressable>
            </View>
        );
}
export default NewItemScreen;
