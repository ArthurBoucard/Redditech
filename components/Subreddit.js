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

function Subreddit() {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const [SubReddit, setSubReddit] = useState(
        { all: null }
    )

    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/'+ global.SubRedditName + '/about.json',
    };

    useEffect(() => {
        axios.request(options).then(function (res) {
            setSubReddit(
                {
                    all: res.data
                }
            )
        }).catch(function (error) {
            console.error(error);
        });
        // console.log(SubReddit.all);
    }, []);

    return (
        <View>
            <View>
                {!SubReddit.all ?
                    <View style={{ height: "100%" }}>
                        <ActivityIndicator style={{ height: "100%" }} size="large" color="#ffa31a" />
                    </View>
                    :
                    <View style={{ height: "31%", backgroundColor: "white" }}>
                        <View style={styles.header}>
                            <Image style={styles.banner} source={{ uri: SubReddit.all.data.header_img }} />
                        </View>
                        <Image style={styles.avatar} source={{ uri: SubReddit.all.data.icon_img }} />
                        <View style={styles.body}>
                            <View>
                                <Text style={styles.name}>{SubReddit.all.data.display_name_prefixed}</Text>
                                <Text style={styles.detail}>{SubReddit.all.data.subscribers} subscribers ○ {SubReddit.all.data.active_user_count} online</Text>
                                <Text style={styles.description}>{SubReddit.all.data.public_description}</Text>
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
        marginRight: 5,
        textAlign: 'left'
    }
});

export default Subreddit;
