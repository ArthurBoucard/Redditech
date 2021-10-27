import React from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { Icon } from "react-native-elements";

import Feed from '../components/Feed'
import Filter from '../components/Filter'

function Home({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: "row", marginRight: 5}}>
                    <Icon name="search" color='#fff' size={30} onPress={() => navigation.navigate('Search')} />
                    <View style={{marginLeft:20}}/>
                    <Icon name="person" color='#fff' size={30} onPress={() => navigation.navigate('Profile')} />
                </View>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <Feed/>
        </ScrollView>
    )
}

export default Home;