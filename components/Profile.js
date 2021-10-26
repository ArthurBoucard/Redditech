import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Icon, FAB } from 'react-native-elements';

function Profile({ navigation }) {
        return (
            <View style={{height:"100%"}}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

                    </View>
                </View>

                <FAB title="Settings" color='lightseagreen' placement='right' icon={
                    <Icon
                        name="settings"
                        size={20}
                        color="white"
                    />}
                    onPress={() => navigation.navigate('Settings')}
                />

            </View>
        )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "lightseagreen",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    body: {
        marginTop: 70,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        marginTop: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    }
});

export default Profile;