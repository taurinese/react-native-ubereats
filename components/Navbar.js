import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import Icon from "react-native-ionicons";

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.route}>
                        <Image style={styles.icons} source={require("../assets/img/accueil.png")} />
                        <Text>Accueil</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.route}>
                        <Image style={styles.icons} source={require("../assets/img/search.png")} />
                        <Text>Parcourir</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.route}>
                        <Image style={styles.icons} source={require("../assets/img/shopping-bag.png")} />
                        <Text>Commandes</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TouchableWithoutFeedback>
                    <View style={styles.route}>
                        <Image style={styles.icons} source={require("../assets/img/user.png")} />
                        <Text>Compte</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        position: "absolute",
        paddingBottom: 40,
        bottom:0,
        borderTopWidth: 2,
        borderTopColor: "#f8f9fa",
        paddingTop: 8,
        shadowColor: "#f8f9fa",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5,
    },
    route: {
        alignItems: "center",
        justifyContent: "center"
    },
    icons: {
        width: 30,
        height: 30
    }
});

export default Navbar;