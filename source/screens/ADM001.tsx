import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { NavigationScreenProp, NavigationState } from "react-navigation";
import HiddenView from '../ultilities/HiddenView';
import AsyncStorage from '@react-native-community/async-storage';

export class ADM001 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { email: string, password: string }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    validate = (): boolean => (this.state.email.trim() != "" && this.state.password.trim() != "")

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ paddingVertical: 5 }}>アカウント名およびパスワードを入力してください</Text>
                <View style={styles.region}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text >アカウント名:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput style={styles.textInput} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                    </View>
                </View>
                <View style={styles.region}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text >パスワード:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput style={styles.textInput} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
                    </View>
                </View>
                <View style={styles.region}>
                    <View style={{ flex: 1, alignItems: 'center' }} />
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.signInBUtton} onPress={async () => {
                            if (this.validate()) {
                                this.props.navigation.navigate('ADM002')
                            } else {
                                Alert.alert('Error', '「アカウント名」または「パスワード」は不正です。')
                            }
                        }}>
                            <Text style={{ color: 'white' }}>ログイン</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    region: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    textInput: {
        borderColor: 'rebeccapurple',
        borderWidth: 1,
        width: '70%'
    },
    signInBUtton: {
        padding: 10,
        backgroundColor: 'rebeccapurple',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
})