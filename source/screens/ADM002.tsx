import React, { Component } from 'react';
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export class ADM002 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { searchKey: string }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
        this.state = {
            searchKey: ''
        };
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <SearchBar
                    placeholder="Type Here..."
                    
                    onChangeText={(text) => this.setState({ searchKey: text })}
                    value={this.state.searchKey}
                />
            </SafeAreaView>
        );
    }
}