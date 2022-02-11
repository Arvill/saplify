import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';

const DetailedAboutScreen = ({ route, navigation }) => {
        return (
            <View>
                {/* <Button onPress={() => navigation.navigate('Home')} title="Go back">
                </Button> */}
                <View>
                    <Image
                        source={route.params.imageUrl}
                    >
                    </Image> 
                    <Text>Price: {route.params.price}kr</Text>
                    <Text>Description: {route.params.description}</Text>
                </View>
            </View>
        );
}

export default DetailedAboutScreen;
