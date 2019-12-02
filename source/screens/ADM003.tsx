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
            <SafeAreaView style={{ padding: 5 }}>
                <InputElement title='* アカウント名:' />

                <InputElement title='* 氏名:' />
                <InputElement title='カタカナ氏名:' />

                <InputElement title='* メールアドレス:' />
                <InputElement title='*電話番号:' />
                <InputElement title='* パスワード:' />
                <InputElement title='パスワード（確認）:' />               

                <InputElement title='点数:' />
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Input placeholder='type here...' />
                </View>
            </View>
        );
    }
}

