import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import { SearchBar } from 'react-native-elements';

export default class Search extends React.Component {

    state = {
        search: "",
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View>
                <StatusBar
                    backgroundColor="white" barStyle="dark-content" />
                <SearchBar
                    lightTheme='true'
                    placeholder="Search"
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
})