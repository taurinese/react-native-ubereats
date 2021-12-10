import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Navbar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },  
  headerButtons : {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headerBtnActive: {
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical:8,
    borderRadius: 20,
    marginHorizontal: 10
  },
  headerBtnInactive: {
    marginHorizontal: 10
  }
});

export default App
