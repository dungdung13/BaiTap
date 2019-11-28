import React, { Component } from 'react';
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';

export class ADM002 extends Component<{ navigation: NavigationScreenProp<NavigationState> }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
               
            </SafeAreaView>
        );
    }
}