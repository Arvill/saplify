import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';

export default function({item, navigation}) {
    return <View key={item.key}>
                <Text>
                    {item.name}
                </Text>  
                <Image
                   source={item.imageUrl}
                >
                </Image> 
                <Button title="Click Here" onPress={() => navigation.navigate('About', { name: 'About Page' })}/>
           </View>    
}