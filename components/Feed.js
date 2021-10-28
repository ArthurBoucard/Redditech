import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Icon, Button, ListItem, Card, FAB } from 'react-native-elements';
import axios from 'axios';

import Filter from "../components/Filter"

function Feed() {

    const [SubReddit, setSubReddit] = useState(
        { all: null }
    )

    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/all/' + 'top' + '.json?limit=50',
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
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <Icon name="person" color='black' size={30} style={{ margin: 5 }} />
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={styles.title}>{!SubReddit.all ? "Loading" : item.data.subreddit_name_prefixed}</Text>
                                            <Text style={styles.second}>{!SubReddit.all ? "Loading" : item.data.author} ○ {!SubReddit.all ? "Loading" : item.data.created}</Text>
                                        </View>
                                    </View>
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
});

export default Feed;