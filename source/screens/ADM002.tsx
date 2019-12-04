import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { FlatList, NavigationScreenProp, NavigationState } from "react-navigation";
import HiddenView from '../ultilities/HiddenView';
import { User } from '../entities/User';

export class ADM002 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { searchKey: string }> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<NavigationState> }) => {
        return {
            title: '会員名称で会員を検索します。検索条件無しの場合は全て表示されます。',
            headerRight: () => (
                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => { navigation.navigate('ADM003') }}>
                    <Icon name='add' />
                </TouchableOpacity>
            ),
        }
    };

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
                    keyExtractor={item => item.userId.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ADM003') }}>
                            <UserItem user={item} />
                        </TouchableOpacity>
                    } />
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
                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

class UserItem extends Component<{ user: User }, { isShowDeltail: boolean }>{
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
                        <Text>{user.userId}</Text>
                    </View>
                    <Text style={{ flex: 3 }}>{user.fullName}</Text>
                    <Text style={{ flex: 3 }}>{user.birthday}</Text>
                    <TouchableOpacity style={{ flex: 1 }}
                        onPress={() => {
                            this.setState({ isShowDeltail: !this.state.isShowDeltail })
                        }}>
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

const dataObj: User[] = [
    { userId: 1, groupId: 1, loginName: 'user 1', password: 'user 1', fullName: 'user 1', fullNameKana: 'user 1', email: 'user 1', tel: 'user 1', birthday: new Date(), rule: 1, salt: '' }
]

