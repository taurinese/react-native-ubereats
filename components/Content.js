import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image, TouchableHighlight, FlatList } from "react-native";
import Restaurant from "./Restaurant";

const Content = () => {
    const images= {
        mcdo: require("../assets/img/restaurants/mcdo.jpeg"),
        mcdoBanner: require("../assets/img/banners/mcdo.jpeg"),
        subway: require("../assets/img/restaurants/subway.jpeg"),
        subwayBanner: require("../assets/img/banners/subway.jpeg")
    }
    const products = {
        crocMcdo: {
            name: "CROQUE McDO™",
            price: "4,90€",
            description: "Pain spécial, fromage fondu, jambon.",
            image: require("../assets/img/restaurants/croque-mcdo.png")
        },
        sub30Thon: {
            name: "SUB30® Thon",
            price: "10,30€",
            description: "Préparation de thon émietté et mayonnaise allégée",
            image: require("../assets/img/restaurants/sub30-thon.png")
        }
    }
    // TODO: faire une flatList au lieu du scrollView
    return(
        <ScrollView style={styles.container} onScroll={this.handleScroll}>
            <Restaurant image={images.mcdo} banner={images.mcdoBanner} name="McDonald's® (Paris République)" deliveryTime="15-25" fee="0,49" product={products.crocMcdo} />
            <Restaurant image={images.subway} banner={images.subwayBanner} name="Subway® - Saint-Paul" deliveryTime="25-35" fee="1,99" product={products.sub30Thon} />
            <Restaurant image={images.mcdo} banner={images.mcdoBanner} name="McDonald's® (Paris République)" deliveryTime="15-25" fee="0,49" product={products.crocMcdo} />
            <Restaurant image={images.subway} banner={images.subwayBanner} name="Subway® - Saint-Paul" deliveryTime="25-35" fee="1,99" product={products.sub30Thon} />
            <Restaurant image={images.mcdo} banner={images.mcdoBanner} name="McDonald's® (Paris République)" deliveryTime="15-25" fee="0,49" product={products.crocMcdo} />
            <Restaurant image={images.subway} banner={images.subwayBanner} name="Subway® - Saint-Paul" deliveryTime="25-35" fee="1,99" product={products.sub30Thon} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        height: "75%"
    }
});

const handleScroll = () => {

};

export default Content;