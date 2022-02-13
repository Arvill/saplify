import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button , Pressable, Linking  } from 'react-native';
import {styles} from "../assets/StyleSheet.js";

const AboutScreen = ({ navigation }) => {
        return (
            <View style={styles.container}>
                  <Text style={styles.title}>About us</Text>
                  <View style={styles.aboutBox}>
                    <Text style={styles.aboutDesc}>{"\n"}
                    Saplify is an app to buy and sell Saplings easily. It's focus is on providing an online marketplace and letting people create offers and let buyers contact them.{"\n"}{"\n"}
                    Made by Group 7 as a project in{"\ "}
                    <Text style={{color:"blue"}} onPress={()=> Linking.openURL("https://www.kth.se/student/kurser/kurs/ID2216")}>
                    ID2216 Developing Mobile Applications</Text>.

                    {"\n"}{"\n"}
                    Developed by:{"\n"}
                    William Axbrink{"\n"}
                    Tor Arvill{"\n"}
                    Julian Vecera{"\n"}
                    Octave Le Tullier
                    </Text>
                    <StatusBar style="auto" />
                </View>
                <View style={styles.invisibleBox}></View>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                  <Text style={styles.textButton}>Back</Text>
                </Pressable>
            </View>
        );
}
export default AboutScreen;
