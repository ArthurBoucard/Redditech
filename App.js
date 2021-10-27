import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Search from './components/Search'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Connection from './components/Connection'

const Stack = createNativeStackNavigator();

function App() {

  global.Token = null

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#ffa31a" />
      <Stack.Navigator initialRouteName="Redditech">
        <Stack.Screen name="Redditech" component={Home} options={{
          title: 'Redditech',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#ffa31a',
          }
        }} />
        <Stack.Screen name="Profile" component={Profile} options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerStyle: { backgroundColor: '#ffa31a' }
        }} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Connection" component={Connection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
