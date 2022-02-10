import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class NewItemScreen extends React.Component {

    render() {
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="go">
                </Button>
                <View>
                    <Text>Price: xx kr</Text>
                    <Text>Description: here comes the description, it can be quite long and must be handled as a long text</Text>
                    <StatusBar style="auto" />
                </View>
            </View>
        );
    }
}