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
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {
                        users.map((u, i) => {
                            return (
                                <Card>
                                    <Card.Title>CARD WITH DIVIDER</Card.Title>
                                    <Card.Divider />
                                    <View key={i} style={{
                                        position: "relative",
                                        alignItems: "center"
                                    }}>
                                        <Image
                                            style={{ width: "100%", height: 100 }}
                                            resizeMode="cover"
                                            source={{ uri: u.avatar }}
                                        />
                                        <Text>{u.name}</Text>
                                    </View>
                                </Card>
                            );
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});