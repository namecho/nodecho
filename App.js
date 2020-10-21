import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createStackNavigator } from '@react-navigation/stack';
// const { Navigator, Screen } = createStackNavigator();

import HomeScreen from './pages/HomeScreen'
import PromotionScreen from './pages/PromotionScreen'
import GameLibraryScreen from './pages/GameLibraryScreen'
import MyScreen from './pages/MyScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        return focused ? <Text style={{ color: 'red' }}>哈哈</Text> : <Text>呵呵</Text>
      }
    })}>
      <Tab.Screen name="首页" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="促销" component={PromotionScreen}></Tab.Screen>
      <Tab.Screen name="游戏库" component={GameLibraryScreen}></Tab.Screen>
      <Tab.Screen name="我的" component={MyScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

function Home1() {
  return <Text>Home1</Text>
}
function Home2() {
  return <Text>Home2</Text>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Home1" component={Home1}></Stack.Screen>
          <Stack.Screen name="Home2" component={Home2}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;