import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Restaurant = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/img/restaurants/mcdo.jpeg")} />
                <Text style={styles.name}>McDonald's® (Paris République)</Text>
                <View style={styles.details}>
                    <Image style={styles.ticket} source={require("../assets/img/restaurants/ticket.png")} />
                    <Text style={styles.frais}> Frais de livraison : 0,49€ • </Text>
                    <Text style={styles.time}>15-25 min</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
        // backgroundColor: "#000"
    },
    image: {
        width: "100%",
        marginBottom: 14
    },
    name: {
        fontWeight: "500"
    },
    details: {
        flexDirection: "row",
        alignItems: "center"
    },
    ticket: {
        width: 15,
        height: 15
    },
    time: {
        color: "#6c757d"
    },
    frais: {
        color: "#343a40"
    }
});

export default Restaurant;