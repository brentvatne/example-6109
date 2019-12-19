import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class App extends Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="Open WebBrowser" onPress={this._handlePressButtonAsync} color="#fff" />
        <Text style={{color: '#fff'}}>{this.state.result && JSON.stringify(this.state.result)}</Text>
      </View>
    );
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://expo.io');
    this.setState({ result });
  };
}