import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image } from "react-native";

const ProductDetails = (props) => {
    return (
        <ScrollView containerStyle={styles.scrollContainer}>
            <Text style={styles.headings}>LES PLUS POPULAIRES</Text>
            <View style={styles.productDiv}>
                <View style={styles.textDiv}>
                    <Text>{props.product.name}</Text>
                    <Text>{props.product.price}</Text>
                    <Text>{props.product.description}</Text>
                </View>
                <Image style={styles.image} source={props.product.image} />
            </View>
            <View style={styles.productDiv}>
                <View style={styles.textDiv}>
                    <Text>{props.product.name}</Text>
                    <Text>{props.product.price}</Text>
                    <Text>{props.product.description}</Text>
                </View>
                <Image style={styles.image} source={props.product.image} />
            </View>
            <Text style={styles.headings}>À PARTAGER</Text>
            <View style={styles.productDiv}>
                <View style={styles.textDiv}>
                    <Text>{props.product.name}</Text>
                    <Text>{props.product.price}</Text>
                    <Text>{props.product.description}</Text>
                </View>
                <Image style={styles.image} source={props.product.image} />
            </View>
            <View style={styles.productDiv}>
                <View style={styles.textDiv}>
                    <Text>{props.product.name}</Text>
                    <Text>{props.product.price}</Text>
                    <Text>{props.product.description}</Text>
                </View>
                <Image style={styles.image} source={props.product.image} />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    productDiv: {
        paddingHorizontal:20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 120
    },
    headings: {
        paddingHorizontal: 20,
        fontSize: 22,
        fontWeight: "600"
    },
    textDiv: {
        width: "50%"
    },
    image: {
        width: 150,
        height: 150
    }
});

export default ProductDetails;