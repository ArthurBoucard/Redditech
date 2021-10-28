import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Icon, SpeedDial } from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";

const actions = [
    {
        text: "Best",
        icon: <Icon
            name="emoji-events"
            size={23}
            color="white"
        />,
        name: "bt_best",
        position: 1,
        color: "#ffa31a"
    },
    {
        text: "Hot",
        icon: <Icon
            name="local-fire-department"
            size={23}
            color="white"
        />,
        name: "bt_Hot",
        position: 2,
        color: "#ffa31a"
    },
    {
        text: "New",
        icon: <Icon
            name="new-releases"
            size={23}
            color="white"
        />,
        name: "bt_new",
        position: 3,
        color: "#ffa31a"
    },
    {
        text: "Rising",
        icon: <Icon
            name="trending-up"
            size={23}
            color="white"
        />,
        name: "bt_rising",
        position: 4,
        color: "#ffa31a"
    }
];

function Filter({ navigation }) {

    return (
        <View style={{ width: "105%", height:"2%" }}>
            <FloatingAction
                floatingIcon={<Icon
                    name="filter-list"
                    size={30}
                    color="white"
                />}
                overlayColor="rgba(68, 68, 68, 0)"
                color="#ffa31a"
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
            />
        </View>
    )
}

export default Filter;