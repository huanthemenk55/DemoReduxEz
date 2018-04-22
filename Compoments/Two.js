import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux'
class Two extends React.Component {
    getColor(){
        return {width:200,
            height:200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.props.hihi,
        }
    }
    render() {
        return (
            <View style={this.getColor()}>
                <Text> Ahihi</Text>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return { hihi: state.colorCon };
}

export default connect(mapStateToProps)(Two);
const styles = StyleSheet.create({
    container: {
        width:200,
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
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
