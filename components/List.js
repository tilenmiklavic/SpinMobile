import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, FlatList, Image } from 'react-native';

export default function List() {
    const [data, setData] = useState([])

    useEffect(() => {
    // write your code here, it's like componentWillMount
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

    const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
    );

    function renderItem({item}) {

    if (item.dogodekNaziv) 
    {
        return <Item title={item.dogodekNaziv}/>
    } 
    else if (item.intervencijaVrstaNaziv) 
    {
        return <Item title={item.intervencijaVrstaNaziv} />
    }
    }

    return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});
