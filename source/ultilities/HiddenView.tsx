import React, { Component } from 'react';
import { View } from "react-native";
import { connect } from 'react-redux';

export class HiddenView extends Component<{ isVisible: boolean, child: any }, any> {
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

const mapStateToProps = (state: { toggleVisibility: boolean }) => {
    return { isVisible: state.toggleVisibility }
}


export default connect(mapStateToProps)(HiddenView);