import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details';
import { IconButton } from 'react-native-paper';

export default function List() {
    const [data, setData] = useState([])
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    useEffect(() => {
        getSpinData();
    }, [])

    function getSpinData() {
        fetch('https://spin3.sos112.si/javno/assets/data/lokacija.json').then((response) => response.json()).then((json) => {
            json.value.forEach(function(value, i) {
            value.id = i;
            })
            setData(json.value)
        }).catch((error) => {
            console.error(error);
        });
    }

    function onRefresh() {
        // console.log("Refreshed")
    }

    const ItemList = () => (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshControl={<RefreshControl
                    colors={["#9Bd35A", "#689F38"]}
                    onRefresh={onRefresh()} />}
            >
                <RefreshControl 
                    onRefresh={onRefresh}/>
            </FlatList>
        </SafeAreaView>
    )

    const Item = ({ item }) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('Details', {item: item})}
        >
            <View style={styles.itemContents}>
                <View style={styles.itemContentText}>
                    <Text style={styles.obcina}>{item.obcinaNaziv}</Text>
                    <Text style={styles.title}>{item.nazivDogodek ? item.nazivDogodek : item.intervencijaVrstaNaziv}</Text>
                </View>
                <View>
                    <IconButton
                        icon="information-outline"
                        size={30}
                        color="#6f6f6f"
                        onPress={() => navigation.navigate('Details', {item: item})}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    function renderItem({item}) {
        if (item.dogodekNaziv) 
        {
            return (
                <Item item={item}/>
            )
        } 
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="ItemList"
        >
            <Stack.Screen name="ItemList" component={ItemList} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    item: {
        height: 70,
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    itemContents: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },  
    title: {
        flexWrap: 'wrap'
    },
    obcina: {
        fontWeight: 'bold'
    },
    itemContentText: {
        justifyContent: 'center'
    }
});
