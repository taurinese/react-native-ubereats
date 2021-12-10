import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ScrollView, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';


const HeaderDetails = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Image style={styles.banner} source={require("../assets/img/banners/mcdo.jpeg")} />
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image style={styles.goBackIcon} source={require("../assets/img/right-arrow-circle.png")} />
            </TouchableWithoutFeedback>
            <View style={styles.headerDiv}>
                <Text style={styles.name}>McDonald's® (Paris République)</Text>
                <View style={styles.rate}>
                    <Text>★ 4.5 (500+ notes) • Américain • € • </Text>
                    <Image style={styles.ticket} source={require("../assets/img/restaurants/ticket.png")} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        maxHeight: "40%"
    },
    headerDiv: {
        padding: 20
    },
    name: {
        fontWeight: "600",
        fontSize: 28
    },
    ticket: {
        width: 15,
        height: 15
    },
    rate:{
        flexDirection: "row",
        alignItems: "center"
    },
    goBackIcon:{
        width:35,
        height:35,
        transform: [
            {
                rotate: "180deg"
            },
/*             {
                rotateZ: "90deg"
            } */
        ],
        position: "absolute",
        top: 20,
        left: 20
    }
});

export default HeaderDetails;