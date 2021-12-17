import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Restaurant = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', {
            banner: props.banner,
            name: props.name,
            product: props.product
        })}>
            <View style={styles.container}>
                <Image style={styles.image} source={props.image} />
                <Text style={styles.name}>{props.name}</Text>
                <View style={styles.details}>
                    <Image style={styles.ticket} source={require("../assets/img/restaurants/ticket.png")} />
                    <Text style={styles.frais}> Frais de livraison : {props.fee}€ • </Text>
                    <Text style={styles.time}>{props.deliveryTime} min</Text>
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