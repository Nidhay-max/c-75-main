import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";

export default class LoginScreen extends Component {
    render(){
        return(
            <View>
                <Text>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    loginbox:{ 
        width:300, 
        height:40, 
        borderWidth:1.5, 
        fontSize:20,
         margin:10, 
         paddingLeft:10 } })