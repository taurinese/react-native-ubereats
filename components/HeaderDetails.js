import React, { useState, setState } from "react";
import { StyleSheet, Image, Text, View, ScrollView, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';


const HeaderDetails = (props) => {

    const navigation = useNavigation();
    const [deliveryMode, setDeliveryMode] = useState("delivery");

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={props.banner} />
            {<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image style={styles.goBackIcon} source={require("../assets/img/right-arrow-circle.png")} />
            </TouchableWithoutFeedback>}
            <TouchableWithoutFeedback>
                <Image style={styles.likeIcon} source={require("../assets/img/heart-circle.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Image style={styles.moreIcon} source={require("../assets/img/more-circle.png")} />
            </TouchableWithoutFeedback>
            <View style={styles.headerDiv}>
                <Text style={styles.name}>{props.name}</Text>
                <View style={styles.rate}>
                    <Text>★ 4.5 (500+ notes) • Américain • € • </Text>
                    <Image style={styles.ticket} source={require("../assets/img/restaurants/ticket.png")} />
                </View>
            </View>
            <View style={styles.deliveryContainer}>
                <TouchableWithoutFeedback onPress={() => setDeliveryMode("delivery")}>
                    <View style={deliveryMode == "delivery"? styles.deliveryButtonActive : styles.deliveryButtonInactive}>
                        <Text style={styles.deliveryButtonHeading}>Livraison</Text>
                        <Text style={styles.deliveryButtonText}>20-30 min</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setDeliveryMode("takeAway")}>
                    <View style={deliveryMode == "takeAway"? styles.deliveryButtonActive : styles.deliveryButtonInactive}>
                        <Text style={styles.deliveryButtonHeading}>À emporter</Text>
                        <Text style={styles.deliveryButtonText}>5-15 min • 1.1 km</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        maxHeight: "50%",
        marginBottom:0
    },
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
    },
    likeIcon:{
        width:35,
        height:35,
        position: "absolute",
        top:20,
        right:65
    },
    moreIcon: {
        width: 35,
        height: 35,
        position: "absolute",
        top: 20,
        right: 20
    },
    deliveryContainer: {
        marginHorizontal: "10%",
        backgroundColor: "#e9ecef",
        width:"80%",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        padding:5
    },
    deliveryButtonActive: {
        backgroundColor: "#FFF",
        paddingVertical:5,
        paddingHorizontal: 10,
        borderRadius:25,
        width:"50%",
        flexDirection: "column",
        alignItems: "center"
    },
    deliveryButtonInactive: {
        paddingVertical:5,
        paddingHorizontal: 10,
        borderRadius:25,
        flexDirection: "column",
        alignItems: "center",
        width:"50%",
    },
    deliveryButtonHeading: {
        fontWeight: "500"
    },
    deliveryButtonText: {
        color: "#495057"
    }
});

export default HeaderDetails;