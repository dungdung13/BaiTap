import React, { Component } from 'react';
import { Button, Picker, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationScreenProp, NavigationState, ScrollView } from "react-navigation";
import { DetailUserJapan } from '../entities/DetailUserJapan';
import { Japan } from '../entities/Japan';
import { User } from '../entities/User';
import HiddenView from '../ultilities/HiddenView';

const defaultState: { isShowDeltail: boolean, user: User, detailUserJapan: DetailUserJapan, japan: Japan } = {
    isShowDeltail: false,
    user: { userId: 0, groupId: 0, loginName: '', password: '', fullName: '', fullNameKana: '', email: '', tel: '', birthday: '', rule: 0, salt: '' },
    detailUserJapan: { detailUserJapanId: 0, userId: 0, codeLevel: '', startDate: '', endDate: '', total: 0 },
    japan: { codeLevel: '0', nameLevel: '0' }
}

export class ADM003 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { isShowDeltail: boolean, user: User, detailUserJapan: DetailUserJapan, japan: Japan }> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<NavigationState> }) => {
        return {
            title: '会員情報編集'
        }
    };

    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
        this.state = defaultState;
    }

    componentDidMount() {
        const passedUser: User = this.props.navigation.getParam('user')
        if (passedUser != null) {
            this.setState({ user: JSON.parse(JSON.stringify(passedUser)) })
        }
    }

    render() {
        return (
            <SafeAreaView style={{ padding: 5 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* アカウント名:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.loginName}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.loginName = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>

                    <PickerElement title='* グループ:' />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* 氏名:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.fullName}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.fullName = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>カタカナ氏名:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.fullNameKana}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.fullNameKana = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* メールアドレス:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.email}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.email = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>*電話番号:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.tel}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.tel = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* パスワード:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.password}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.password = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>パスワード（確認）:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.password}
                                onChangeText={(text) => {
                                    const tmp = this.state.user
                                    tmp.password = text
                                    this.setState({ user: tmp })
                                }} />
                        </View>
                    </View>

                    <TouchableOpacity style={{ margin: 10, alignItems: 'center' }} onPress={() => { this.setState({ isShowDeltail: !this.state.isShowDeltail }) }}>
                        <Text style={{ fontWeight: 'bold', color: 'rebeccapurple' }}>日本語能力</Text>
                    </TouchableOpacity>
                    <HiddenView
                        isVisible={this.state.isShowDeltail}
                        child={
                            <View>
                                <PickerElement title='資格:' />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>資格交付日:</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Input placeholder='type here...' value={this.state.detailUserJapan.startDate}
                                            onChangeText={(text) => {
                                                const tmp = this.state.detailUserJapan
                                                tmp.startDate = text
                                                this.setState({ detailUserJapan: tmp })
                                            }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>失効日:</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Input placeholder='type here...' value={this.state.detailUserJapan.endDate}
                                            onChangeText={(text) => {
                                                const tmp = this.state.detailUserJapan
                                                tmp.endDate = text
                                                this.setState({ detailUserJapan: tmp })
                                            }} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>点数:</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Input placeholder='type here...' value={this.state.detailUserJapan.codeLevel}
                                            onChangeText={(text) => {
                                                const tmp = this.state.detailUserJapan
                                                tmp.codeLevel = text
                                                this.setState({ detailUserJapan: tmp })
                                            }} />
                                    </View>
                                </View>
                            </View>
                        } />
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Button color='rebeccapurple' title='確認' onPress={() => { this.props.navigation.navigate('ADM004', { user: this.state.user }) }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Button color='rebeccapurple' title='戻る' onPress={() => { this.props.navigation.goBack() }} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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