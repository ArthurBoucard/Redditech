import React, { useCallback, useState, useEffect } from 'react';
import { authorize } from 'react-native-app-auth'

function Connection({ navigation }) {

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
                    {
                        token : authState.accessToken,
                        tokenExpiration : authState.accessTokenExpirationDate,
                        refreshToken : authState.refreshToken
                    }
                )
            } catch(e) {
                console.log(e)
            }
        }
    )
    // useEffect(() => {
        Auth();
        console.log(apiData.token)
        global.Token = apiData.token
    // }, []);

    if (!global.Token) {
        console.log("Token is null")
    } else {
        navigation.navigate('Profile')
    }

    return (
        <></>
    )
}

export default Connection;