import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Two from "./Two";
export default class One extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Two/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:300,
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecacb1',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
