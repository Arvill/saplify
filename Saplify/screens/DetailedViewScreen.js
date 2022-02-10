import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
            <View>
                <Button onPress={() => navigation.navigate('Home')} title="go">
                </Button>
                <View>
                    <Text>Price: {route.params.price}kr</Text>
                    <Text>Description: {route.params.description}</Text>
                    <StatusBar style="auto" />
                </View>
            </View>
        );
}

export default DetailedAboutScreen;
