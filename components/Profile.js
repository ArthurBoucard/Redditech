import React, { useCallback, useState } from 'react';
import { authorize } from 'react-native-app-auth'
import axios from 'axios';

import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Icon, FAB } from 'react-native-elements';

function Profile({ navigation }) {

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
            <View style={{height:"100%"}}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                    </View>
                </View>

                <FAB title="Settings" color='lightseagreen' placement='right' icon={
                    <Icon
                        name="settings"
                        size={20}
                        color="white"
                    />}
                    onPress={() => navigation.navigate('Settings')}
                />

            </View>
        )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "lightseagreen",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    body: {
        marginTop: 70,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        marginTop: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    }
});

export default Profile;