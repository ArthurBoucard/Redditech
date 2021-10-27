import React, { useCallback, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { Icon, FAB } from 'react-native-elements';
import './Connection';
import axios from 'axios';

function Profile({ navigation }) {

    const [User, setUser] = useState(
        { all : null }
    )
    
    const options = {
        method: 'GET',
        url: 'https://oauth.reddit.com/api/v1/me',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: "Bearer " + global.Token,
        },
    };

    useEffect(() => {
        axios.request(options).then(function (res) {
            setUser(
                {
                    all : res.data
                }
            )
        }).catch(function (error) {
            console.error(error);
        });
        console.log(User.all);
    }, []);

    return (
        <View>
            {!global.Token ? 
                <Button
                    title="connection"
                    onPress={() => navigation.navigate('Connection')}
                />
            :
                <View>
                    {!User.all ? 
                        <Text>Loading...</Text>
                    :
                        <View style={{height:"100%"}}>
                            <View style={styles.header}></View>
                            <Image style={styles.avatar} source={{ uri: (User.all.icon_img).split("?")[0] }} />
                            <View style={styles.body}>
                                <View>
                                    <Text style={styles.name}>{User.all.name}</Text>
                                    <Text style={styles.description}>{User.all.subreddit.public_description}</Text>
        
                                </View>
                            </View>
        
                            <FAB title="Settings" color='#ffa31a' placement='right' icon={
                                <Icon
                                    name="settings"
                                    size={20}
                                    color="white"
                                />}
                                onPress={() => navigation.navigate('Settings')}
                            />
                        </View>
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#ffa31a",
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