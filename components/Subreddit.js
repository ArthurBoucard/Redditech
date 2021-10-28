import React, { useCallback, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    Refres
} from 'react-native';
import { Icon, FAB, Button, Tab } from 'react-native-elements';
import axios from 'axios';

import Feed from "../components/Feed"
import Filter from './Filter'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function Subreddit({ navigation }) {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

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
                        <View style={{ height: "31%", backgroundColor: "white" }}>
                            <View style={styles.header}>
                                <Image style={styles.banner} source={{ uri: (User.all.subreddit.banner_img).split("?")[0] }} />
                            </View>
                            <Image style={styles.avatar} source={{ uri: (User.all.icon_img).split("?")[0] }} />
                            <View style={styles.body}>
                                <View>
                                    <Text style={styles.name}>Name</Text>
                                    <Text style={styles.detail}>Nb abonné ○ Nb abonné online</Text>
                                    <Text style={styles.description}>Description</Text>
                                </View>
                            </View>
                        </View>
                    }
                    <ScrollView
                        style={{ zIndex: 0 }}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View>
                            <Feed />
                        </View>
                    </ScrollView>
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
        position: 'absolute',
        marginTop: 130
    },
    banner: {
        width: "100%",
        height: 200,
        alignSelf: 'center',
    },
    body: {
        marginLeft: 15,
        marginTop: 60
    },
    name: {
        fontSize: 28,
        color: "black",
        fontWeight: "600",
        textAlign: 'left'
    },
    detail: {
        fontSize: 16,
        color: "#696969",
        marginTop: 1,
        textAlign: 'left'
    },
    description: {
        fontSize: 18,
        color: "black",
        marginTop: 15,
        textAlign: 'left'
    }
});

export default Subreddit;
