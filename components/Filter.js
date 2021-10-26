import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';

function Filter({ navigation }) {

    const filter = [{ icon: 'home', text: 'home' }, { icon: 'settings', text: 'settings' }, { icon: 'search', text: 'search' }];

    return (
        <View>
            <Text>Hello world</Text>
            {filter.map((item, index) => (
                <View>
                    <Text> {item.text} </Text>
                    <Icon name={item.icon} />
                </View>
            ))}
        </View>
    )
}

export default Filter;