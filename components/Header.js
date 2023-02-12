import React from "react";
import { View,Text, StyleSheet,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

const Header = () => {
    return (
        <View>
            <View style={styles.menu}>
                <Text style={styles.menuText}>MENU</Text>
            </View>

            <View style={{paddingVertical:9, paddingHorizontal:18}}>
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="search1" size={20} color="#000"/>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor='#151515'
                    onChangeText={(searchString) => {this.setState({searchString})}}
                    underlineColorAndroid="transparent"
                />
            </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    menu:{
        alignItems:'center',
        paddingTop: 54
    },
    menuText:{
        fontWeight: '500',
        color:'#000',
        fontSize:16
    },
    searchSection: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowOpacity: 5,
        shadowRadius: 1,
        shadowOffset: {
        height: 1,
        width: 1,
        },
        elevation: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
}) 

export default Header;
