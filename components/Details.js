import { Text, View } from 'react-native';

export default function Details({route, navigation}) {
    const { item } = route.params;
        return (
            <View>
                <Text>{item.obcinaNaziv}</Text>
                <Text>{item.nastanekCas}</Text>
                <Text>{item.prijavaCas}</Text>
                <Text>{item.dogodekNaziv}</Text>
                <Text>{item.intervencijaVrstaNaziv}</Text>
                <Text>{item.besedilo}</Text>
            </View>
        )
}