import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationScreenProp, NavigationState } from "react-navigation";

export class ADM003 extends Component<{ navigation: NavigationScreenProp<NavigationState> }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>

            </SafeAreaView>
        );
    }
}

class InputElement extends Component<{ title: string }> {
    constructor(props: { title: string }) {
        super(props);
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text>{this.props.title}</Text>
                <Input placeholder='type here...' />
            </View>
        );
    }
}