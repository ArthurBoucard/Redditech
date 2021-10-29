import React from 'react'
import { View, ScrollView, RefreshControl, StyleSheet, Image, Text } from 'react-native'
import { Icon } from "react-native-elements";

import Feed from '../components/Feed'
import SubFeed from '../components/SubFeed'
import Filter from '../components/Filter'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function Home({ navigation }) {

    var filter = 'all/' + global.Filter

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: "row", marginRight: 5 }}>
                    <Icon name="search" color='#fff' size={30} onPress={() => navigation.navigate('Search')} />
                    <View style={{ marginLeft: 20 }} />
                    <Icon name="person" color='#fff' size={30} onPress={() => navigation.navigate('Profile')} />
                </View>
            ),
        });
    }, [navigation]);
    
    return (
        <View>
            {refreshing ? <></> :
                <View>
                    <ScrollView
                        style={{ zIndex: 0 }}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        {!global.Token ?
                            <View>
                                <Feed subreddit={filter} />
                            </View>
                        :
                            <View>
                                <SubFeed subreddit={filter} />
                            </View>
                        }
                    </ScrollView>
                    <Filter style={{ zIndex: 3 }}/>
                </View>
            }
        </View>
    )
}

export default Home;