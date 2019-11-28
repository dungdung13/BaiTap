import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationScreenProp, NavigationState } from "react-navigation";

export class ADM001 extends Component<{ navigation: NavigationScreenProp<NavigationState> }> {
    constructor(props: { navigation: NavigationScreenProp<NavigationState> }) {
        super(props);
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
                        <TextInput style={styles.textInput} />
                    </View>
                </View>
                <View style={styles.region}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text >パスワード:</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput style={styles.textInput} />
                    </View>
                </View>
                <View style={styles.region}>
                    <View style={{ flex: 1, alignItems: 'center' }} />
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.signInBUtton} onPress={() => { this.props.navigation.navigate('ADM002') }}>
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