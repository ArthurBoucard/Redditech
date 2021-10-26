import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Settings extends React.Component {

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}> Settings </Text>
                <Text> Settings </Text>
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