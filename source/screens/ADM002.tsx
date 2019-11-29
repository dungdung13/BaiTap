import React, { Component } from 'react';
import { NavigationScreenProp, NavigationState, FlatList } from "react-navigation";
import { Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import HiddenView from '../ultilities/HiddenView';

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
                    lightTheme={true}
                    round={true}
                    placeholder="Type Here..."
                    onChangeText={(text) => this.setState({ searchKey: text })}
                    value={this.state.searchKey}
                />
                <FlatList
                    data={dataObj}
                    keyExtractor={item => item.user_id.toString()}
                    renderItem={({ item }) => <UserItem user={item} />}
                />
            </SafeAreaView>
        );
    }
}

class UserDetail extends Component<{ title: string, content: string }>{
    constructor(props: { title: string, content: string }) {
        super(props);
    }
    render() {

        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }} />
                <Text style={{ flex: 3 }}>{this.props.title}</Text>
                <Text style={{ flex: 3 }}>{this.props.content}</Text>
            </View>
        );
    }
}

class UserItem extends Component<any, { isShowDeltail: boolean }>{
    constructor(props: any) {
        super(props);
        this.state = {
            isShowDeltail: false
        };
    }
    render() {
        const { user } = this.props

        return (
            <View style={{ padding: 10, margin: 10, borderColor: 'rebeccapurple', borderWidth: 1, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text>{user.user_id}</Text>
                    </View>
                    <Text style={{ flex: 3 }}>{user.full_name}</Text>
                    <Text style={{ flex: 3 }}>{user.birthday}</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ isShowDeltail: !this.state.isShowDeltail })}>
                        {this.state.isShowDeltail ? <Icon name='ios-arrow-dropup' type='ionicon' color='rebeccapurple' /> : <Icon name='ios-arrow-dropdown' type='ionicon' color='rebeccapurple' />}
                    </TouchableOpacity>
                </View>
                <HiddenView
                    isVisible={this.state.isShowDeltail}
                    child={
                        <View>
                            <UserDetail title='email' content={user.email} />
                            <UserDetail title='telephone' content={user.tel} />
                        </View>
                    } />
            </View>
        );
    }
}

const dataObj = [
    { user_id: 1, group_id: 1, login_name: '', password: '', full_name: 'Nguyễn Thị Mai Hương', full_name_kana: '', email: 'ntmhuong@luvina.net', tel: '0914326386', birthday: '1983/07/08	', Rule: 1, Salt: '' },
    { user_id: 2, group_id: 2, login_name: '', password: '', full_name: 'Lê Thị Xoa', full_name_kana: '', email: 'xoalt@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
    { user_id: 3, group_id: 1, login_name: '', password: '', full_name: 'Đặng Thị Hân', full_name_kana: '', email: 'handt@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
    { user_id: 4, group_id: 2, login_name: '', password: '', full_name: 'Lê Nghiêm Thủy', full_name_kana: '', email: 'thuyln@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
    { user_id: 5, group_id: 2, login_name: '', password: '', full_name: 'Lê Phương Anh', full_name_kana: '', email: 'anhlp@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
    { user_id: 6, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 7, group_id: 2, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 8, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 9, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 10, group_id: 2, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 11, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 12, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
    { user_id: 13, group_id: 2, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
]
