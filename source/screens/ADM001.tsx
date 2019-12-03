import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProp, NavigationState } from "react-navigation";
import HiddenView from '../ultilities/HiddenView';

export class ADM001 extends Component<{ navigation: NavigationScreenProp<NavigationState> }, { email: string, password: string, isError: boolean }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isError: false
        }
    }

    validate = (): boolean => {
        if (this.state.email.trim() != "" && this.state.password.trim() != "") {
            this.setState({ isError: false })
            return true
        }
        this.setState({ isError: true })
        return false
    }

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
                        <TouchableOpacity style={styles.signInBUtton} onPress={() => {
                            if (this.validate()) {
                                this.props.navigation.navigate('ADM002')
                            }
                        }}>
                            <Text style={{ color: 'white' }}>ログイン</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <HiddenView isVisible={this.state.isError} child={
                    <View>
                        <Text>Error</Text>
                    </View>} />
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