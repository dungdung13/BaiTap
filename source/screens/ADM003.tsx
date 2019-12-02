import React, { Component } from 'react';
import { SafeAreaView, Text, View, Picker, Button, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationScreenProp, NavigationState, ScrollView } from "react-navigation";
import HiddenView from '../ultilities/HiddenView';

export class ADM003 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { isShowDeltail: boolean }> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<NavigationState> }) => {
        return {
            title: '会員情報編集'
        }
    };

    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
        this.state = {
            isShowDeltail: false
        };
    }
    render() {
        return (
            <SafeAreaView style={{ padding: 5 }}>
                <ScrollView>
                    <InputElement title='* アカウント名:' />
                    <PickerElement title='* グループ:' />
                    <InputElement title='* 氏名:' />
                    <InputElement title='カタカナ氏名:' />

                    <InputElement title='* メールアドレス:' />
                    <InputElement title='*電話番号:' />
                    <InputElement title='* パスワード:' />
                    <InputElement title='パスワード（確認）:' />
                    <TouchableOpacity style={{ margin: 10, alignItems: 'center' }} onPress={() => { this.setState({ isShowDeltail: !this.state.isShowDeltail }) }}>
                        <Text>日本語能力</Text>
                    </TouchableOpacity>
                    <HiddenView
                        isVisible={this.state.isShowDeltail}
                        child={
                            <View>
                                <PickerElement title='資格:' />


                                <InputElement title='点数:' />
                            </View>
                        } />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Button title='確認' onPress={() => { }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Button title='戻る' onPress={() => { }} />
                        </View>
                    </View>
                </ScrollView>
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

class PickerElement extends Component<{ title: string }> {
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
                    <Picker>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                </View>
            </View>
        );
    }
}