import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Search from './components/Search'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Connection from './components/Connection'
import Subreddit from './components/Subreddit'

const Stack = createNativeStackNavigator();

function App() {

  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  global.Token = null
  global.Filter = 'top'
  global.FilterIcon = 'grade'
  global.SubRedditName = null

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
        <Stack.Screen name="Subreddit" component={Subreddit} options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerStyle: { backgroundColor: '#ffa31a' }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
