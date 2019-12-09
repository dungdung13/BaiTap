import React, { Component } from 'react';
import { SafeAreaView, Text, View, Picker, Button, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationScreenProp, NavigationState, ScrollView } from "react-navigation";
import HiddenView from '../ultilities/HiddenView';
import { User } from '../entities/User';
import { Japan } from '../entities/Japan';
import { DetailUserJapan } from '../entities/DetailUserJapan';

const defaultState: { isShowDeltail: boolean, user: User, detailUserJapan: DetailUserJapan } = {
    isShowDeltail: false,
    user: { userId: 0, groupId: 0, loginName: '', password: '', fullName: '', fullNameKana: '', email: '', tel: '', birthday: '', rule: 0, salt: '' },
    detailUserJapan: { detailUserJapanId: 0, userId: 0, codeLevel: '', startDate: '', endDate: '', total: 0 }
}

export class ADM003 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { isShowDeltail: boolean, user: User, detailUserJapan: DetailUserJapan }> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<NavigationState> }) => {
        return {
            title: '会員情報編集'
        }
    };

    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
        this.state = defaultState;
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
                            <Input placeholder='type here...' value={this.state.user.loginName} />
                        </View>
                    </View>

                    <PickerElement title='* グループ:' />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* 氏名:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.fullName} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>カタカナ氏名:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.fullNameKana} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* メールアドレス:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.email} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>*電話番号:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.tel} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>* パスワード:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.password} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>パスワード（確認）:</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Input placeholder='type here...' value={this.state.user.password} />
                        </View>
                    </View>

                    <TouchableOpacity style={{ margin: 10, alignItems: 'center' }} onPress={() => { this.setState({ isShowDeltail: !this.state.isShowDeltail }) }}>
                        <Text>日本語能力</Text>
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
                                        <Input placeholder='type here...' value={this.state.detailUserJapan.startDate} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>失効日:</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Input placeholder='type here...' value={this.state.detailUserJapan.endDate} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>点数:</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Input placeholder='type here...' value={this.state.detailUserJapan.codeLevel} />
                                    </View>
                                </View>
                            </View>
                        } />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Button title='確認' onPress={() => { this.props.navigation.navigate('ADM004', { user: this.state.user }) }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Button title='戻る' onPress={() => { this.props.navigation.goBack() }} />
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