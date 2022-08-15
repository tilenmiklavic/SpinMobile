import { Callout } from "react-native-maps";
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Details from "./Details";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker } from "react-native-maps";
import MapDetails from "./MapDetails";


export default function HomeScreen() {
    const [data, setData] = useState([])
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
  
    useEffect(() => {
      // write your code here, it's like componentWillMount
      getSpinData();
    }, [])
  
    function getSpinData() {
      fetch('https://spin3.sos112.si/javno/assets/data/lokacija.json').then((response) => response.json()).then((json) => {
        let icons = []
        json.value.forEach(el => {
          if (el.ikona == 0 && el.barva == 0) {
            el.icon = require("../assets/incident_icons/00.png")
          } else if (el.ikona == 1 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/11.png")
          } else if (el.ikona == 1 && el.barva == 2) {
            el.icon = require("../assets/incident_icons/12.png")
          } else if (el.ikona == 1 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/13.png")
          } else if (el.ikona == 2 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/21.png")
          } else if (el.ikona == 2 && el.barva == 2) {
            el.icon = require("../assets/incident_icons/22.png")
          } else if (el.ikona == 2 && el.barva == 3) {
            el.icon = require("../assets/incident_icons/23.png")
          } else if (el.ikona == 2 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/24.png")
          } else if (el.ikona == 3 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/31.png")
          } else if (el.ikona == 3 && el.barva == 2) {
            el.icon = require("../assets/incident_icons/32.png")
          } else if (el.ikona == 3 && el.barva == 3) {
            el.icon = require("../assets/incident_icons/33.png")
          } else if (el.ikona == 3 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/34.png")
          } else if (el.ikona == 4 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/41.png")
          } else if (el.ikona == 4 && el.barva == 2) {
            el.icon = require("../assets/incident_icons/42.png")
          } else if (el.ikona == 4 && el.barva == 3) {
            el.icon = require("../assets/incident_icons/43.png")
          } else if (el.ikona == 4 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/44.png")
          } else if (el.ikona == 5 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/51.png")
          } else if (el.ikona == 5 && el.barva == 3) {
            el.icon = require("../assets/incident_icons/53.png")
          } else if (el.ikona == 5 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/54.png")
          } else if (el.ikona == 6 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/61.png")
          } else if (el.ikona == 7 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/71.png")
          } else if (el.ikona == 7 && el.barva == 2) {
            el.icon = require("../assets/incident_icons/72.png")
          } else if (el.ikona == 7 && el.barva == 3) {
            el.icon = require("../assets/incident_icons/73.png")
          } else if (el.ikona == 7 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/74.png")
          } else if (el.ikona == 8 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/81.png")
          } else if (el.ikona == 8 && el.barva == 2) {
            el.icon = require("../assets/incident_icons/82.png")
          } else if (el.ikona == 8 && el.barva == 3) {
            el.icon = require("../assets/incident_icons/83.png")
          } else if (el.ikona == 8 && el.barva == 4) {
            el.icon = require("../assets/incident_icons/84.png")
          } else if (el.ikona == 9 && el.barva == 1) {
            el.icon = require("../assets/incident_icons/91.png")
          }
        })
        setData(json.value)
      }).catch((error) => {
          console.error(error);
      });
    }

    const Zemljevid = () => (
        <View style={styles.container}>
            <MapView style={styles.map}>
            {data.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={{ latitude: marker.wgsLat, longitude: marker.wgsLon}}
                  title={marker.dogodekNaziv}
                  description={marker.intervencijaVrstaNaziv} >
                    <Image 
                    source={marker.icon}
                    style={{width: 20, height: 20}}
                    resizeMode="contain" />

                    <Callout style={styles.callout}>
                        <TouchableOpacity onPress={() => navigation.navigate('MapDetails', {item: marker})}>
                            <View>
                                <Text style={styles.calloutText}>{marker.obcinaNaziv}</Text>
                                <Text>{marker.dogodekNaziv}</Text>
                            </View>
                        </TouchableOpacity>
                    </Callout>
                </Marker>
            ))}
            </MapView>
        </View>
    )
  
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Zemljevid"
        >
            <Stack.Screen name="Zemljevid" component={Zemljevid} />
            <Stack.Screen name="MapDetails" component={MapDetails} />
        </Stack.Navigator>
    );
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
    callout: {
        alignSelf: 'flex-start',
        width: 300
    },
    calloutText: {
        flex: 1,
        textAlign: 'left'
    }
  });