import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
            <View>
                <View>
                    <Image
                        source={route.params.imageUrl}
                    >
                    </Image> 
                    <Text>Price: {route.params.price}kr</Text>
                    <Text>Description: {route.params.description}</Text>
                    <Button onPress={() => navigation.navigate('Home')} title="Back"></Button>
                </View>
            </View>
        );
}

export default DetailedAboutScreen;
