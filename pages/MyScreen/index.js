import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<View>
      <Text>我的</Text>
    </View>);
  }
}

export default MyScreen;