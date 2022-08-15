import { View, StyleSheet } from 'react-native';
import Details from './Details';

export default function MapDetails({route, navigation}) {
        return (
            <View style={styles.container}>
                <Details route={route} />
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});