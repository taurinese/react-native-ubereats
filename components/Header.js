import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import { Card } from "react-native-elements";
import Icon from 'react-native-ionicons';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.headerButtons}>
                <TouchableWithoutFeedback>
                    <View style={styles.headerBtnActive}>
                        <Text style={{color: "#FFF"}}>Livraison</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.headerBtnInactive}>
                        <Text>À emporter</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.addressBlock}>
                <View></View>
                <Text style={styles.addressText}>
                    Maintenant • 19 Rue Yves Toudic
                </Text>
                {/* <Icon color="#000" name="filter-outline" size={25} /> */}
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Category')}>
                        <View style={styles.categoryDiv}>
                            <Image source={require('../assets/img/deals.png')} style={styles.categoryIcon} />
                            <Text style={styles.categoryText}>Offres</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Category')}>
                        <View style={styles.categoryDiv}>
                            <Image source={require('../assets/img/uber_grocery.png')} style={styles.categoryIcon} />
                            <Text style={styles.categoryText}>Courses</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Category')}>
                        <View style={styles.categoryDiv}>
                            <Image source={require('../assets/img/convenience.png')} style={styles.categoryIcon} />
                            <Text style={styles.categoryText}>Épicerie</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Category')}>
                        <View style={styles.categoryDiv}>
                            <Image source={require('../assets/img/alcohol.png')} style={styles.categoryIcon} />
                            <Text style={styles.categoryText}>Alcool</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Category')}>
                        <View style={styles.categoryDiv}>
                            <Image source={require('../assets/img/beauty.png')} style={styles.categoryIcon} />
                            <Text style={styles.categoryText}>Hygiène</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
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
      alignItems: "center",
      marginBottom: 15
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
    },
    addressBlock: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15
    },
    addressText: {
        fontSize: 16,
        fontWeight: "500"
    },
    categoryDiv: {
        alignItems: "center",
        marginHorizontal: 12,
        marginBottom: 15
    },
    categoryIcon: {
        width: 60,
        height: 60,
        marginBottom: 4
    },
    categoryText: {
        fontWeight: "500"
    }
  });

export default Header;