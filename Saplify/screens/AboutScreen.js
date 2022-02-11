import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const AboutScreen = ({ navigation, route }) => {
        return (
            <View>

                <Button onPress={() => navigation.navigate('Home')} title="go">
                </Button>
                <View>
                    <Text style={styles.titleText}>About us</Text>
                    <Text style={styles.baseText}>{"\n"}Saplify is an app to buy and sell Saplings easily. It's focus is on providing an online marketplace and letting people create offers and let buyers contact them.{"\n"}{"\n"}</Text>
                    <Text style={styles.baseText}>Made by AppDevTeam / Group 7 as project in Developing Mobile Applications</Text>
                    <StatusBar style="auto" />
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    baseText: {
      
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });

export default AboutScreen;

