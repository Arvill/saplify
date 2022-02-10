import * as React from 'react';
import { Text, View, Image, Button, TouchableHighlight } from 'react-native';

export default function({item, navigation}) {
    return <View key={item.key}>
              <TouchableHighlight 
                  onPress={() => navigation.navigate('NewItem')}>
                    <View>
                      <Text>
                        {item.name}
                      </Text>  
                      <Image
                        source={item.imageUrl}
                      >
                      </Image> 
                    </View>
              </TouchableHighlight>{/* 
                <Button title="Click Here" onPress={() => navigation.navigate('NewItem')}/> */}
           </View>    
}