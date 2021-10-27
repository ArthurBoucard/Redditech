import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Icon, Button, ListItem, Card } from 'react-native-elements';

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

export default class Feed extends React.Component {

    render() {
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
                                    <Text>{item.name}</Text>
                                </View>
                            </Card>
                        );
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 42,
    },
});