import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Icon, Button, ListItem, Card } from 'react-native-elements';
import axios from 'axios';

function SubFeed() {

    const [SubReddit, setSubReddit] = useState(
        { all : null }
    )
    
    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/all/' + 'hot' + '.json?limit=50',
    };

    useEffect(() => {
        axios.request(options).then(function (res) {
            setSubReddit(
                {
                    all : res.data
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
                <View></View>
            :
                (SubReddit.all.data.children).map((item, index) => {
                    return (
                        <Card>
                            <View key={index} style={{
                                position: "relative",
                                alignItems: "center"
                            }}>
                                <Image
                                    style={{ width: "100%", height: item.data.thumbnail_height }}
                                    resizeMode="cover"
                                    source={{ uri: item.data.thumbnail }}
                                />
                                <Text style={styles.text}>{!SubReddit.all ? "Loading" : item.data.subreddit_name_prefixed}</Text>
                                <Text style={styles.text}>{!SubReddit.all ? "Loading" : item.data.title}</Text>
                                <Text style={styles.text}>{!SubReddit.all ? "Loading" : item.data.author}</Text>
                                <Text style={styles.text}>{!SubReddit.all ? "Loading" : item.data.created}</Text>
                            </View>
                        </Card>
                    );
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
    },
});

export default SubFeed;