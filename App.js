import MapView, {Marker} from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from './components/Settings.js';
import List from './components/List.js';
import HomeScreen from './components/Home.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen 
        name="List" 
        component={List}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
          ),  
        }} />
      <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
});
