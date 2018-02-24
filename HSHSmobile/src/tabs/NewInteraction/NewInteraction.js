/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import Popup from "../../modules/popups/popup";
import Counter from "../../modules/Counter";
import Icon from 'react-native-vector-icons/Ionicons';




export default class Info extends Component {
    constructor(props) {
      super(props);
    }


    render() {
        return (
          <View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    popupDialogButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    textInput: {
      marginTop: 3,
      height: 40,
      width: "80%",
      borderColor: 'gray',
      borderWidth: 1
    },
});
