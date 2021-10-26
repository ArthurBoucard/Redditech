import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Feed extends React.Component {

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}> Feed </Text>
                <Text> Feed zzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzzzzz frrrrrrrrrrrrrrrrr eddddddddddddddddd </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        color: "#00FF00"
    },
})