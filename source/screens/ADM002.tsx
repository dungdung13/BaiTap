import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Animated, StyleSheet, I18nManager, Alert } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { FlatList, NavigationScreenProp, NavigationState } from "react-navigation";
import { User } from '../entities/User';
import HiddenView from '../ultilities/HiddenView';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export class ADM002 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { searchKey: string }> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<NavigationState> }) => {
        return {
            title: '会員名称で会員を検索します。検索条件無しの場合は全て表示されます。',
            headerRight: () => (
                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => { navigation.navigate('ADM003') }}>
                    <Icon name='add' color='rebeccapurple'/>
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

    renderRightAction = (text: string, color: any, x: any, progress: any, action: any) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const pressHandler = () => {
            action()
        };
        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

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
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item }) =>
                        <Swipeable
                            rightThreshold={40}
                            friction={2}
                            renderRightActions={(progress, dragX) => {
                                return (
                                    <View style={{ width: 144, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
                                        {this.renderRightAction('Edit', '#C8C7CD', 144, progress, () => { this.props.navigation.navigate('ADM003', { user: item }) })}
                                        {this.renderRightAction('Delete', '#dd2c00', 48, progress, () => { })}
                                    </View>
                                )
                            }}>
                            <UserItem user={item} />
                        </Swipeable>
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
            <View style={{ flexDirection: 'row', padding: 5 }}>
                <View style={{ flex: 1 }} />
                <Text style={{ flex: 3 }}>{this.props.title}</Text>
                <Text style={{ flex: 3 }}>{this.props.content}</Text>
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
            <TouchableOpacity style={{ padding: 10, margin: 10 }} onPress={() => { this.setState({ isShowDeltail: !this.state.isShowDeltail }) }}>
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <View style={{ flex: 1 }}>
                        <Text>{user.userId}</Text>
                    </View>
                    <Text style={{ flex: 3 }}>{user.fullName}</Text>
                    <Text style={{ flex: 3 }}>{user.birthday.toString()}</Text>
                </View>
                <HiddenView
                    isVisible={this.state.isShowDeltail}
                    child={
                        <View>
                            <UserDetail title='email' content={user.email} />
                            <UserDetail title='telephone' content={user.tel} />
                        </View>
                    } />
            </TouchableOpacity>
        );
    }
}

const dataObj: User[] = [
    { userId: 1, groupId: 1, loginName: 'user 1', password: 'user1', fullName: 'user 1 full name', fullNameKana: 'user 1 fullname kana', email: 'user1@gmail.com', tel: '0123456789', birthday: '2019/12/09', rule: 1, salt: '' },
    { userId: 2, groupId: 1, loginName: 'user 2', password: 'user2', fullName: 'user 2 full name', fullNameKana: 'user 1 fullname kana', email: 'user1@gmail.com', tel: '0123456789', birthday: '2019/12/09', rule: 1, salt: '' }
]

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        backgroundColor: 'rebeccapurple',
        height: StyleSheet.hairlineWidth,
    },
});