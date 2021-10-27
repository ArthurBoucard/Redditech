import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Icon, Button, ListItem, Card } from 'react-native-elements';
import axios from 'axios';

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'hello',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'world',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'john',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'dohe',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
]


function Feed() {

    const [SubReddit, setSubReddit] = useState(
        { all : null }
    )
    
    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/all/' + 'top' + '.json?limit=1',
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
        console.log(SubReddit.all);
    }, []);
    // console.log(SubReddit.all.data.children);

    return (
        <View>
            {
                users.map((item, index) => {
                    return (
                        <Card>
                            <Card.Title>CARD WITH DIVIDER</Card.Title>
                            <Card.Divider />
                            <View style={{
                                position: "relative",
                                alignItems: "center"
                            }}>
                                <Image
                                    style={{ width: "100%", height: 100 }}
                                    resizeMode="cover"
                                    source={{ uri: item.avatar }}
                                />
                                <Text>{!SubReddit.all ? "Loading" : SubReddit.all.data.children.subreddit}</Text>
                                <Text>{!SubReddit.all ? "Loading" : SubReddit.all.data.children.title}</Text>
                                <Text>{!SubReddit.all ? "Loading" : SubReddit.all.data.children.author}</Text>
                                <Text>{!SubReddit.all ? "Loading" : SubReddit.all.data.children.created}</Text>
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
        fontSize: 42,
    },
});

export default Feed;