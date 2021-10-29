import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import { Icon, Button, ListItem, Card, FAB } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const GetSubRedditIcon = ( props ) => {

    const [SubReddit, setSubReddit] = useState(
        { all: null }
    )

    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/'+ props.subreddit + '/about.json',
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
            {!SubReddit.all ?
                <></>
            :
                <Image style={styles.avatar} source={{ uri: SubReddit.all.data.icon_img }} />
            }
        </View>
    )
}

function Feed( props ) {

    const { navigate } = useNavigation();

    const [SubReddit, setSubReddit] = useState(
        { all: null }
    )

    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/' + props.subreddit + '.json',
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
    // console.log(SubReddit.all.data.children[0])

    return (
        <View>
            {!SubReddit.all ?
                <View style={{ zIndex: 0 }}></View>
            :
                (SubReddit.all.data.children).map((item, index) => {
                    return (
                        <View style={{ zIndex: 0 }}>
                            <Card>
                                <View key={index} style={{
                                    position: "relative"
                                }}>
                                    <Pressable onPress={() => {navigate('Subreddit'); global.SubRedditName = item.data.subreddit}}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <GetSubRedditIcon subreddit={item.data.subreddit} />
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={styles.title}>{!SubReddit.all ? "Loading" : item.data.subreddit_name_prefixed}</Text>
                                                <Text style={styles.second}>{!SubReddit.all ? "Loading" : item.data.author} ○ {!SubReddit.all ? "Loading" : item.data.created}</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                    <View style={{
                                        alignItems: "center"
                                    }}>
                                        <Text style={styles.third}>{!SubReddit.all ? "Loading" : item.data.title}</Text>
                                        <Image
                                            style={{ width: item.data.thumbnail_width * 2, height: item.data.thumbnail_height * 2, marginVertical: 10, }}
                                            resizeMode="cover"
                                            source={{ uri: item.data.thumbnail }}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    );
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    second: {
        color: 'black',
        alignItems: 'center',
    },
    third: {
        color: 'black',
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: "black",
        margin: 5,
    },
});

export default Feed;