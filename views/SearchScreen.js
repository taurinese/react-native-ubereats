import React, { useState, setState } from "react";
import { SearchBar } from 'react-native-elements';
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, SafeAreaView, Image } from "react-native";
import LottieView from 'lottie-react-native';

export default class SearchScreen extends React.Component {

    state = {    
        search: '',  
    };
    updateSearch = (search) => {    
        this.setState({ search });  
    };

    
    render(){
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <SearchBar        
                placeholder="Plats, courses alimentaires, boissons, etc..."        
                onChangeText={this.updateSearch}        
                value={search}
                platform="ios"
                containerStyle={styles.containerSearchBar}
                />
                <LottieView style={search != ""? {display:"flex"}: {display: "none"}} source={require('../assets/animations/loading.json')} autoPlay loop />
                <ScrollView style={search != ""? {display:"none"}: {display: "flex"}}>
                    <Text style={styles.heading}>Meilleures catégories</Text>
                    <View style={styles.categories}>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/courses.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Courses</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/burgers.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Burgers</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/courses.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Courses</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/burgers.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Burgers</Text>
                        </View>
                    </View>
                    <Text style={styles.heading}>Toutes les catégories</Text>
                    <View style={styles.categories}>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/courses.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Courses</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/burgers.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Burgers</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/courses.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Courses</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/burgers.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Burgers</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/courses.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Courses</Text>
                        </View>
                        <View style={styles.category}>
                            <Image source={require("../assets/img/categories/burgers.png")} style={styles.categoryImg} />
                            <Text style={styles.categoryText}>Burgers</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: "100%",
        width: "100%"
    },
    containerSearchBar: {
        marginBottom: 12,
        backgroundColor: 'transparent'
    },
    heading: {
        fontSize: 18,
        paddingHorizontal:12,
        fontWeight: "700",
        marginBottom: 20
    },
    categories: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    category: {
        width: "45%",
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#DDD",
        borderWidth: 1,
        backgroundColor: "#fefefe"
    },
    categoryImg: {
        width: "100%",
        height: 90,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    categoryText: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: "400"
    }
});
