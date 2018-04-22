import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Compoments/Main';
import store from './reduxTest/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
