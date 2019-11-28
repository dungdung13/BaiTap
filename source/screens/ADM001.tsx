import React, { Component } from 'react';
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Text, View, TextInput, Button } from 'react-native';
import { BaseButton, TouchableOpacity } from 'react-native-gesture-handler';

export class ADM001 extends Component<{ navigation: NavigationScreenProp<NavigationState> }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ paddingVertical: 5 }}>アカウント名およびパスワードを入力してください</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text >アカウント名:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput style={{ borderColor: 'black', borderWidth: 1, width: '70%' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text >パスワード:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput style={{ borderColor: 'black', borderWidth: 1, width: '70%' }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                    <View style={{ flex: 1, alignItems: 'center' }} />
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ padding: 5, backgroundColor:'red', borderColor: 'black', borderWidth: 1, width: 'auto', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text>ログイン</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}