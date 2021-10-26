import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authorize } from 'react-native-app-auth'
import axios from 'axios';

import Home from './components/Home'
import Search from './components/Search'
import Profile from './components/Profile'
import Settings from './components/Settings'

const Stack = createNativeStackNavigator();

function App() {

  const [apiData, setapiData] = useState(
    { token : null, tokenExpiration : null, refreshToken : null }
  )

  const config = {
    redirectUrl: 'com.redditech://oauth2redirect/reddit',
    clientId: 'fcafYt6_OhrlQEN6NTTyUQ',
    clientSecret: '',
    scopes: ['identity'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
      tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
      token: {
        Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ==',
      },
    },
  };
  
  const Auth = useCallback(
    async call => {
      try {
        const authState = await authorize(config);
        setapiData(
          { token : authState.accessToken,
            tokenExpiration : authState.accessTokenExpirationDate,
            refreshToken : authState.refreshToken }
        )
      } catch(e) {
        console.log(e)
      }
    }
  )
  Auth();
  console.log(apiData.token)

  const options = {
    method: 'GET',
    url: 'https://oauth.reddit.com/api/v1/me',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + apiData.token,
    },
  };
  axios.request(options).then(function (res) {
    console.log(res.data);
  }).catch(function (error) {
    console.error(error);
  });
  
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="lightseagreen" />
      <Stack.Navigator initialRouteName="Redditech">
        <Stack.Screen name="Redditech" component={Home} options={{
          title: 'Redditech',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: 'lightseagreen',
          }
        }} />
        <Stack.Screen name="Profile" component={Profile} options={{
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerStyle: { backgroundColor: 'lightseagreen' }
        }} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
