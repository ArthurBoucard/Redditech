import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import Filter from "../components/Filter"

export default class Settings extends React.Component {

    render() {
        return (
            <View style={style.view}>
                <StatusBar
                    backgroundColor="white" barStyle="dark-content" />
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