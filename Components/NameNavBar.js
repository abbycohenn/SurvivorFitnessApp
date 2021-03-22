import Icon from "react-native-vector-icons/MaterialIcons";
import React,{Component} from 'react';
import {BackHandler, StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView ,TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StackNavigator } from 'react-navigation';


export default class NameNavBarComponent extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <View style={styles.headline}>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 9}}>
                <Icon name = {'arrow-back'} size = {30} color = {'#BEBEBE'}/>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flex: .9, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 30, color: '#3E3E3E'}}>{this.props.name}</Text>
            </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    headline: {
        fontWeight: 'bold',
        fontSize: 25,
        position: 'absolute',
        marginTop: 45,
        marginLeft: 0,
        color: '#3E3E3E',
        flexDirection:'row',
        flexWrap:'wrap',
        flex: 1,
        opacity: 1,
        zIndex: 15

    }
});
