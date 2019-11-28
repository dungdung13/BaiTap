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
                    
                    renderItem={({ item }) => <UserItem item={item} />}
                />
            </SafeAreaView>
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
        
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text>{this.props.item.user_id}</Text>
                    </View>
                </View>
                <HiddenView
                    isVisible={this.state.isShowDeltail}
                    child={
                        <Text style={{ color: 'whitesmoke', margin: 5 }}>{this.props.item.detail}</Text>
                    } />
            </View>
        );
    }
}

// const dataObj = [
//     { user_id: 1, group_id: 1, login_name: '', password: '', full_name: 'Nguyễn Thị Mai Hương', full_name_kana: '', email: 'ntmhuong@luvina.net', tel: '0914326386', birthday: '1983/07/08	', Rule: 1, Salt: '' },
//     { user_id: 2, group_id: 2, login_name: '', password: '', full_name: 'Lê Thị Xoa', full_name_kana: '', email: 'xoalt@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
//     { user_id: 3, group_id: 1, login_name: '', password: '', full_name: 'Đặng Thị Hân', full_name_kana: '', email: 'handt@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
//     { user_id: 4, group_id: 2, login_name: '', password: '', full_name: 'Lê Nghiêm Thủy', full_name_kana: '', email: 'thuyln@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
//     { user_id: 5, group_id: 2, login_name: '', password: '', full_name: 'Lê Phương Anh', full_name_kana: '', email: 'anhlp@luvina.net', tel: '1234567894', birthday: '1983/07/08	', Rule: 1, Salt: '' },
//     { user_id: 6, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 7, group_id: 2, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 8, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 9, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 10, group_id: 2, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 11, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 12, group_id: 1, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
//     { user_id: 13, group_id: 2, login_name: '', password: '', full_name: '', full_name_kana: '', email: '', tel: '', birthday: '', Rule: 1, Salt: '' },
// ]

const dataObj = [
    { user_id: 1},
    { user_id: 2},
    { user_id: 3},
    { user_id: 4},    
]