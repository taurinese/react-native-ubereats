import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Content from "../components/Content";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const HomeScreen = () => {
    return(
        <View style={{backgroundColor: "#FFF"}}>
            <Header />
            <View>
                <Content /> 
            </View>
            {/* <Navbar /> */}
        </View>
    );
}


export default HomeScreen;
