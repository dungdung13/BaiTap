import React, { Component } from 'react';
import { View } from "react-native";

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

const mapStateToProps = (state: boolean) => {    
    return state
}