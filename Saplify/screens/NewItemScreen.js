import * as React from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, Alert, PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {styles} from "../assets/StyleSheet.js";
import { Plant } from "../components/Plant.js";
import { RNS3 } from 'react-native-aws3';

const NewItemScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const S3_BUCKET ='saplifykth';
    const REGION ='eu-central-1';
    const ACCESS_KEY ='AKIAYOSFEO2KAZL6Z5GF';
    const SECRET_ACCESS_KEY ='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';

    const options = {
      keyPrefix: "",
      bucket: S3_BUCKET,
      region: REGION,
      accessKey: ACCESS_KEY,
      secretKey: SECRET_ACCESS_KEY,
      successActionStatus: 201
    }
  
    const pickImage = async () => {
      requestCameraPermission();
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.cancelled) {
        setImage(result);
      }
    };

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
  }

    const uploadPicture = ()=>{
      const plant = new Plant(Math.floor(Math.random()*100000), name, price, phone, email, location, description, image);
      console.log("Image", image.uri);
      
      image.name = `${makeid(64)}.jpg`;

      RNS3.put(image, options).then(response => {
        if (response.status !== 201) {
          console.log(response);
          throw new Error("Failed to upload image to S3", response);
        }
          
      }).catch((e) => {
        console.log(e);
      });

      plant.image = image.name;

      plant.postData();
      Alert.alert(
        "Plant added",
        "The plant was added to the entries and is visible now for all users.",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

      
  
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
