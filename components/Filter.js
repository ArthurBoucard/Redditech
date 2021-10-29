import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Icon, SpeedDial } from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";

const FindIcon = ( name ) => {
    if(name=='best')
        global.FilterIcon='emoji-events'
    else if(name=='hot')
        global.FilterIcon='local-fire-department'
    else if(name=='new')
        global.FilterIcon='new-releases'
    else if(name=='top')
        global.FilterIcon='grade'
    else if(name=='rising')
        global.FilterIcon='trending-up'
    else
        global.FilterIcon='filter-list'
}

const actions = [
    {
        text: "Best",
        icon: <Icon
            name="emoji-events"
            size={23}
            color="white"
        />,
        name: "best",
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
        name: "hot",
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
        name: "new",
        position: 3,
        color: "#ffa31a"
    },
    {
        text: "Top",
        icon: <Icon
            name="grade"
            size={23}
            color="white"
        />,
        name: "top",
        position: 4,
        color: "#ffa31a"
    },
    {
        text: "Rising",
        icon: <Icon
            name="trending-up"
            size={23}
            color="white"
        />,
        name: "rising",
        position: 5,
        color: "#ffa31a"
    }
];

function Filter() {

    console.log('FILTER==========================================================================================================')
    console.log(global.Filter)
    console.log(global.FilterIcon)

    return (
        <View style={{ width: "105%", height:"1%" }}>
            <FloatingAction
                floatingIcon={<Icon
                    name={global.FilterIcon}
                    size={30}
                    color="white"
                />}
                overlayColor="rgba(68, 68, 68, 0)"
                color="#ffa31a"
                actions={actions}
                onPressItem={name => {
                    global.Filter=name;
                    FindIcon(name);
                }}
            />
        </View>
    )
}

export default Filter;