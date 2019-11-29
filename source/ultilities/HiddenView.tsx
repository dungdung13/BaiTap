import { View } from "react-native";
import React, { Component } from 'react';


export default class HiddenView extends Component<{ isVisible: boolean, child: any }, any> {
    constructor(props: { isVisible: boolean, child: any }) {
        super(props);
    }
    render() {
        if (!this.props.isVisible) {
            return null
        } else {
            return (
                <View>
                    {this.props.child}
                </View>
            );
        }
    }
}