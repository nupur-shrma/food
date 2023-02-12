import React from "react";
import { View,Text,StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Card from "../components/Card";

const Home = () => {
    return (
    <ScrollView style={styles.container}>
      <Header/>
      <View
        style={{
          borderBottomColor: '#979797',
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingTop:15,
        }}
      />
      <Categories/>
      <View
        style={{
          borderBottomColor: '#979797',
          borderBottomWidth: StyleSheet.hairlineWidth,
          //paddingTop:15,
        }}
      />
      <Card/>
  </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
      //flex:1,
      backgroundColor:'#fff',
      marginBottom:5
    }
});

export default Home;
