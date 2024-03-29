import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationEventSubscription, NavigationScreenProp, NavigationState, ScrollView } from "react-navigation";
import { User } from '../entities/User';
import HiddenView from '../ultilities/HiddenView';
import { Button } from 'react-native-elements';

export class ADM004 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { isShowDeltail: boolean }> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<NavigationState> }) => {
        return {
            title: '情報確認'
        }
    };

    constructor(props: { navigation: NavigationScreenProp<NavigationState>, focusListener: NavigationEventSubscription }) {
        super(props);
        this.state = {
            isShowDeltail: true
        };
    }

    componentDidMount() {

    }

    render() {
        const user: User = this.props.navigation.getParam('user')
        return (
            <SafeAreaView>
                <ScrollView style={{ padding: 5 }}>
                    <UserDetail title='アカウント名:' content={user.loginName} />
                    <UserDetail title='グループ:' content={user.groupId.toString()} />
                    <UserDetail title='氏名:' content={user.fullName} />
                    <UserDetail title='カタカナ氏名:' content={user.fullNameKana} />
                    <UserDetail title='生年月日:' content={user.birthday.toString()} />
                    <UserDetail title='メールアドレス:' content={user.email} />
                    <UserDetail title='電話番号:' content={user.tel} />
                    <Button buttonStyle={{ backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }} titleStyle={{ color: 'rebeccapurple' }} title='日本語能力' onPress={() => {
                        this.setState({ isShowDeltail: !this.state.isShowDeltail })
                    }} />
                    <HiddenView isVisible={this.state.isShowDeltail} child={
                        <View>
                            <UserDetail title='資格:' content={user.tel} />
                            <UserDetail title='資格交付日:' content={user.tel} />
                            <UserDetail title='失効日:' content={user.tel} />
                            <UserDetail title='点数:' content={user.tel} />
                        </View>
                    } />
                    <Button buttonStyle={{ backgroundColor: 'rebeccapurple', marginTop: 15 }} title='確認' onPress={() => { this.props.navigation.navigate('ADM002')}} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

class UserDetail extends Component<{ title: string, content: string }> {
    constructor(props: { title: string, content: string }) {
        super(props);
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
                <View style={{ flex: 1, borderEndWidth: 1, padding: 10, }}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={{ flex: 2, padding: 10 }}>
                    <Text>{this.props.content}</Text>
                </View>
            </View>
        );
    }
}