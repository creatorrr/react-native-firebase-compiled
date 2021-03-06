/* eslint-disable import/extensions,import/no-unresolved */
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import jet from 'jet/platform/react-native';
import firebase from 'react-native-firebase';

require('sinon');
require('should-sinon');
require('should');

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    jet.exposeContextProperty('module', firebase);
  }

  render() {
    return (
      <View>
        <Text testID="messageText">{this.state.message}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('testing', () => Root);
