import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, SafeAreaView } from "react-native";
import HeaderDetails from "../components/HeaderDetails";
import ProductDetails from "../components/ProductDetails";

const DetailsScreen = ({route}) => {
    return (
        <View style={styles.bgWhite}>
            <HeaderDetails name={route.params.name} banner={route.params.banner} />
            <ProductDetails product={route.params.product} />
        </View>
    )
};

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF"
    }
})
export default DetailsScreen;