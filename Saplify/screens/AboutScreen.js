import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button , Pressable, Linking  } from 'react-native';

const AboutScreen = ({ navigation }) => {
        return (
            <View style={styles.container}>
                  <Text style={styles.title}>About us</Text>
                  <View style={styles.about_box}>
                    <Text style={styles.about_desc}>{"\n"}
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
                <View style={styles.invisible_box}></View>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.back_button}>
                  <Text style={styles.text_button}>Back</Text>
                </Pressable>
            </View>
        );
}

const styles = StyleSheet.create({
    baseText: {

    },
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
  about_box: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  about_desc: {
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
    width: "100%",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
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

export default AboutScreen;
