import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';
import One  from "./One";
import {connect} from 'react-redux';
class Main extends Component {
    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }
    render() {
        return (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={{backgroundColor:"yellow"}}
                        onPress={()=> this.setFilterStatus('Vang')}
                    >
                        <Text> ON </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor:"red"}}
                        onPress={()=> this.setFilterStatus('Do')}
                    >
                        <Text> ON </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor:"black"}}
                        onPress={()=> this.setFilterStatus('Den')}
                    >
                        <Text> ON </Text>
                    </TouchableOpacity>
                    <One/>
                </View>
        );
    }
}
export default connect()(Main);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
