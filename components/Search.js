import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import axios from 'axios';
import { Searchbar } from 'react-native-paper';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function Search() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const [SubReddit, setSubReddit] = useState(
        { all: null }
    )

    const options = {
        method: 'GET',
        url: 'https://www.reddit.com/r/'+ searchQuery + '/about.json',
    };

    axios.request(options).then(function (res) {
        wait(20000).then(() => setSubReddit({ all: res.data }));
    }).catch(function (error) {
        setSubReddit({ all: null })
        console.error(error);
    });
    console.log(SubReddit.all);
    console.log(searchQuery);

    const { navigate } = useNavigation();

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Card>
                <View style={{
                    position: "relative"
                }}>
                    <Pressable onPress={() => {navigate('Subreddit'); global.SubRedditName = SubReddit.all.data.subreddit}}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image style={styles.avatar} source={{ uri: !SubReddit.all ? "Loading" : SubReddit.all.data.icon_img }} />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.title}>{!SubReddit.all ? "Loading" : SubReddit.all.data.display_name_prefixed}</Text>
                                <Text style={styles.second}>{!SubReddit.all ? "Loading" : SubReddit.all.data.subscribers} subscribers ○ {!SubReddit.all ? "Loading" : SubReddit.all.data.active_user_count} online</Text>
                            </View>
                        </View>
                    </Pressable>
                    <View style={{
                        alignItems: "center"
                    }}>
                        <Text style={styles.third}>{!SubReddit.all ? "Loading" : SubReddit.all.data.title}</Text>
                        <Image
                            style={{ width: "100%", height: 150 }}
                            resizeMode="cover"
                            source={{ uri: !SubReddit.all ? "Loading" : SubReddit.all.data.header_img }}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
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

export default Search;