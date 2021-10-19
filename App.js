/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback } from 'react';
import {authorize} from 'react-native-app-auth'

const App = () => {

  const config = {
    redirectUrl: 'com.redditech://oauth2redirect/reddit',
    clientId: 'fcafYt6_OhrlQEN6NTTyUQ',
    clientSecret: '', // empty string - needed for iOS
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
        console.log(authState)
      } catch(e) {
        console.log(e)
      }
    }
  )
  Auth();

  return (
    <>
    </>
  );
};

export default App;
