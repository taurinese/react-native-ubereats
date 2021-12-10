import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import Restaurant from "./Restaurant";

const Content = () => {
    return(
        <ScrollView style={styles.container} onScroll={this.handleScroll}>
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
            <Restaurant />
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