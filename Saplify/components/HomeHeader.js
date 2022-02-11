import { View, Button, Text } from 'react-native';

const HomeHeader = ({isSearching, setIsSearching}) => {
    return (
        <View>
            <Text>Sapling</Text>
            <Button title={"Search"}
                    onPress={() => setIsSearching(!isSearching)}
            ></Button>
        </View>
    )
}

export default HomeHeader;