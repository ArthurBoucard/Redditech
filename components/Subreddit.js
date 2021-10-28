import React, { useCallback, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import { Icon, FAB, Button, Tab } from 'react-native-elements';
import './Connection';
import axios from 'axios';

function Subreddit({ navigation }) {

    const [User, setUser] = useState(
        { all: null }
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
                    all: res.data
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
                <View style={{ height: "100%" }}>
                    <FAB title="subreddit" icon={{
                        name: "login",
                        size: 15,
                        color: "white"
                    }}
                        style={{ height: "100%" }}
                        color="#ffa31a"
                        onPress={() => navigation.navigate('Connection')} />
                </View>
                :
                <View>
                    {!User.all ?
                        <View style={{ height: "100%" }}>
                            <ActivityIndicator style={{ height: "100%" }} size="large" color="#ffa31a" />
                        </View>
                        :
                        <View style={{ height: "100%", backgroundColor: "white" }}>
                            <View style={styles.header}>
                                <Image style={styles.banner} source={{ uri: (User.all.subreddit.banner_img).split("?")[0] }} />
                            </View>
                            <Image style={styles.avatar} source={{ uri: (User.all.icon_img).split("?")[0] }} />
                            <View style={styles.body}>
                                <View>
                                    <Text style={styles.name}>{User.all.name}</Text>
                                    <Text style={styles.description}>{User.all.subreddit.display_name_prefixed} ○ {User.all.created} ○ {User.all.total_karma} karma</Text>
                                    <Text style={styles.description}>{User.all.subreddit.public_description}</Text>
                                    <Text style={styles.followers}>{User.all.subreddit.subscribers} followers</Text>
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
    banner: {
        width: "100%",
        height: 200,
        alignSelf: 'center',
    },
    body: {
        marginTop: 70
    },
    name: {
        fontSize: 28,
        color: "black",
        fontWeight: "600",
        marginTop: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    followers: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        marginTop: 30,
        textAlign: 'center'
    }
});

export default Subreddit;