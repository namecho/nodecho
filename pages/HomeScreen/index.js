import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function Home1() {
  return <Text>Home1</Text>
}
function Home2() {
  return <Text>Home2</Text>
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<View>
      <Text>首页</Text>
      <Button onPress={e => { this.onPress1(e) }} title="Home1"></Button>
      <Button onPress={e => { this.onPress2(e) }} title="Home2"></Button>
      <Stack.Navigator initialRouteName='Home1'>
        <Stack.Screen name="Home1" component={Home1}></Stack.Screen>
        <Stack.Screen name="Home2" component={Home2}></Stack.Screen>
      </Stack.Navigator>
    </View>);
  }
  onPress1() {
    this.props.navigation.navigate('Home1')
  }
  onPress2() {
    this.props.navigation.navigate('Home2')
  }
}

export default HomeScreen;