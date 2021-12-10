import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, SafeAreaView } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./views/HomeScreen";
import SearchScreen from "./views/SearchScreen";
import OrdersScreen from "./views/OrdersScreen";
import UserScreen from "./views/UserScreen";
import Icon from 'react-native-vector-icons/Ionicons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Icon.loadFont();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } 
            else if (route.name === 'Search') {
              iconName = "search";
            }
            else if (route.name === 'Orders') {
              iconName = "list";
            }
            else if (route.name === 'User') {
              iconName = "person";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',})}>
          <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
          <Tab.Screen name="Orders" component={OrdersScreen} options={{headerShown: false}} />
          <Tab.Screen name="User" component={UserScreen} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column"
    },  
});

export default App
